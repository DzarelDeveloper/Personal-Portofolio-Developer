/** Join truthy class names. Keeps conditional `className` expressions readable. */
export default function clsx(
  ...values: readonly (string | false | null | undefined)[]
): string {
  return values.filter(Boolean).join(" ");
}
