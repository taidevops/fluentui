const uppercasePattern = /[A-Z]/g;
const uiPattern = /^ui-/;
const cache: Record<string, string> = {};

function toHyphenLower(match: string): string {
  return '-' + match.toLowerCase();
}

export function hyphenateProperty(name: string): string {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  if (name.substr(0, 2) === '--') {
    return name;
  }

  const hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache[name] = uiPattern.test(hName) ? '-' + hName : hName);
}
