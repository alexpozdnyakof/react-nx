export default function withUnit(
  input: string | number,
  suffix: '%' | 'mb' | 'tx'
): string {
  const stringValue = typeof input == 'string' ? input : input.toString();
  return stringValue.concat(suffix);
}
