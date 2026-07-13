/**
 * A single navigation link entry.
 *
 * `href`     — route path (internal) or full URL (external)
 * `label`    — accessible text shown in the nav
 * `external` — when true, opens in a new tab via <a> instead of <Link>
 */
export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}
