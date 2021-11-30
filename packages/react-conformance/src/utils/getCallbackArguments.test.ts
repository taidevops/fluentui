/*
 * @jest-environment node
 */

import { DirectoryJSON, fs as memFS, vol } from 'memfs';
import * as realFS from 'fs';
import * as ts from 'typescript';

/**
 * Creates a CompilerHost that reads files from memfs.
 */
function createCompilerHost(): ts.CompilerHost {
  const originalHost = ts.createCompilerHost({});

  function fileExists(fileName: string): boolean {
    return memFS.existsSync(fileName) || realFS.existsSync(fileName);
  }

  function getSourceFile(fileName: string, languageVersion: ts.ScriptTarget) {
    let sourceText;

    if (memFS.existsSync(fileName)) {
      sourceText = memFS.readFileSync(fileName, 'utf8') as string;
    } else if (realFS.existsSync(fileName)) {
      sourceText = realFS.readFileSync(fileName, 'utf8');
    }

    return sourceText === undefined ? undefined : ts.createSourceFile(fileName, sourceText, languageVersion);
  }

  return {
    ...originalHost,

    readFile: () => {
      throw new Error('Not supported');
    },
    writeFile: () => {
      throw new Error('Not supported');
    },

    getSourceFile,
    fileExists,
  };
}

async function setupProgram(
  rootNames: ts.CreateProgramOptions['rootNames'],
  directoryJSON: DirectoryJSON,
): Promise<ts.Program> {
  vol.fromJSON(directoryJSON);

  return ts.createProgram({
    rootNames,
    options: {},
    host: createCompilerHost(),
  });
}

describe('getCallbackArguments', () => {
  describe('params', () => {
    it('handles empty params', async () => {
      const program = await setupProgram(['Accordion.types.ts'], {
        './Accordion.types.ts': 'export interface AccordionProps { onToggle: () => void; }',
      });
      const type =
    })
  })
})
