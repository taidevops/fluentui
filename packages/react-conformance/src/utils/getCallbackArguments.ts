import * as ts from 'typescript';

// ---

export type ArgumentName = string;
type ArgumentPrimitiveValue = null | boolean | string | undefined;

// ---

/**
 * Returns an identifier as a string.
 */
function identifierToString(node: ts.Identifier): string {
  if (typeof node.escapedText !== 'string') {
    throw new Error(
      'An identifier is not a string, this could be a bug or an unhandled scenario. Please report it if it happens',
    );
  }

  return node.escapedText;
}

/**
 * Converts AST node with "LiteralType" that has "*Keyword" kind to a primitive value.
 */
function literalNodeToPrimitive(node: ts.LiteralTypeNode['literal']): null | boolean {
  if (node.kind === ts.SyntaxKind.NullKeyword) {
    return null;
  }

  if (node.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  }

  if (node.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  }

  throw new Error(
    'Unexpected kind of node is passed, this could be a bug or an unhandled scenario. Please report it if it happens',
  );
}

function parseArgumentName(name: ts.PropertyName | ts.ParameterDeclaration['name']): ArgumentName {

}

/**
 * Find a property signature for a type, class, or interface.
 */
const findPropertySignature = (
  typeChecker: ts.TypeChecker,
  sourceFile: ts.SourceFile,
  typeName: string,
  propertyName: string,
  seen: { typeName: string; fileName: string }[],
): ts.PropertySignature | undefined => {
  // avoid infinte recursion looking up types
  if (seen.some(x => x.fileName === sourceFile.fileName && x.typeName === typeName)) {
    return undefined;
  }
  seen.push({ typeName, fileName: sourceFile.fileName });

  for (let i = 0; i < sourceFile.statements.length; i++) {
    const statement = sourceFile.statements[i];

    if (ts.isInterfaceDeclaration(statement) && statement?.name?.escapedText === typeName) {
      return statement.members.find(member => {
        if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
          return member.name.escapedText === propertyName;
        }

        return false;
      }) as ts.PropertySignature | undefined;
    }

    if (ts.isClassDeclaration(statement) && statement?.name?.escapedText === typeName) {
      // Class members are of a different type than interfaces, so the find is repeated
      return statement.members.find(member => {
        if (ts.isPropertySignature(member) && ts.isIdentifier(member.name)) {
          return member.name.escapedText === propertyName;
        }

        return false;
      }) as ts.PropertySignature | undefined;
    }

    if (ts.isTypeAliasDeclaration(statement)) {
      if (statement.name.escapedText === typeName) {
        // The can be Union, Intersection, or regular types
        // This uses the type checker to inspect across the composite type.
        const statementType = typeChecker.getTypeFromTypeNode(statement.type);
        const property = typeChecker.getPropertyOfType(statementType, propertyName);

        if (property && ts.isPropertySignature(property.valueDeclaration)) {
          return property.valueDeclaration;
        }
      } else {
        // If the type name does not match, it may be a type alias
        // so follow the statement.type to resolve the underlying type.
        const propertySignature =
      }
    }
  }
}

/**
 * Unfortunately `react-typescript-docgen` returns stringified types for callbacks which is not useful as we can't
 * build additional validations around it. This function lookups for specified callbacks and returns its resolved
 * arguments.
 *
 * @param program An instance of TS Program
 * @param filename A filename where we will lookup for callback definition
 * @param typeName A name of type ("*Props") that contains callback definition
 * @param propertyName A name of property that contains callback definition
 *
 * @example
 * interface ComponentProps {
 *   onChange: (event: Event) => void
 * }
 *
 * Will be parsed to: ['event', 'Event']
 */
export function getCallbackArguments(
  program: ts.Program,
  filename: string,
  typeName: string,
  propertyName: string,
): [ArgumentName, ArgumentValue | ArgumentValue[]][] {
  const typeChecker = program.getTypeChecker();
  const sourceFile = program.getSourceFile().find(file => file.fileName.includes(filename));

  if (!sourceFile) {
    throw new Error(
      `A file (${filename}) was not found in TS program, this looks like an invocation problem, check your params`,
    );
  }

  const propertySignature =
}
