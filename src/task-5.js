
export default function trim(text, maxLength) {
  if (maxLength <= 0) {
    throw new RangeError('Max length must be a positive value');
  }
  if (text.length > maxLength) {
    text = `${text.slice(0, maxLength - 1)}…`
  }
  return text;
}
