/**
 * cn — lightweight className utility.
 *
 * Joins truthy class strings. Covers all conditional class patterns
 * in this codebase without the overhead of clsx or tailwind-merge.
 *
 * Usage:
 *   cn('base-class', condition && 'conditional-class', 'another-class')
 *   cn(styles.root, isActive && styles.active)
 *
 * If class conflicts arise (e.g., two bg- utilities), install tailwind-merge
 * and replace the join with twMerge(...classes.filter(Boolean)).
 */
export function cn(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
