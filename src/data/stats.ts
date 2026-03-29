/**
 * Single source of truth for marketing numbers shown across the site.
 * Update here only — home, about, and other sections should import from this module.
 */
export const SITE_STATS = {
  yearsExperience: "12+",
  projectsCompleted: "150+",
  permitApprovalRate: "100%",
  satisfiedClients: "50+",
} as const;

/** Bottom stats band on the home page (four columns). */
export const homeStats = [
  { number: SITE_STATS.projectsCompleted, label: "Projects Completed" },
  { number: SITE_STATS.yearsExperience, label: "Years Experience" },
  { number: SITE_STATS.permitApprovalRate, label: "Permit Approval Rate" },
  { number: SITE_STATS.satisfiedClients, label: "Satisfied Clients" },
] as const;

/** Two highlights in the home “About Our Studio” column. */
export const homeAboutHighlights = [
  { number: SITE_STATS.yearsExperience, label: "Years Experience" },
  { number: SITE_STATS.projectsCompleted, label: "Projects Delivered" },
] as const;

/** Compact trio next to leadership copy on the about page. */
export const aboutLeadershipStats = [
  { stat: SITE_STATS.projectsCompleted, label: "Projects" },
  { stat: SITE_STATS.yearsExperience, label: "Years" },
  { stat: SITE_STATS.permitApprovalRate, label: "Approvals" },
] as const;

/** Split "150+" / "100%" for accent styling on the suffix. */
export function splitStatNumber(value: string): { main: string; suffix: string } {
  if (value.endsWith("+")) return { main: value.slice(0, -1), suffix: "+" };
  if (value.endsWith("%")) return { main: value.slice(0, -1), suffix: "%" };
  return { main: value, suffix: "" };
}
