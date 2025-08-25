export default function cleanSet(set, startString) {
  if (!startString || startString.length === 0) {
    return '';
  }

  let result = '';
  let first = true;

  for (const value of set) {
    if (typeof value === 'string') {
      if (value.indexOf(startString) === 0) {
        const rest = value.substring(startString.length);

        if (first) {
          result += rest;
          first = false;
        } else {
          result += '-' + rest;
        }
      }
    }
  }

  return result;
}
