/** Shared core + padding — site-wide primary / secondary CTAs */

const primaryCore =
  "bg-salt-crimson text-white font-sans font-semibold text-sm tracking-[0.04em] rounded-[4px] border-0 outline-none hover:bg-[#b8002a] hover:text-white transition-all duration-200 cursor-pointer";

export const primaryCtaClasses = `${primaryCore} px-7 py-3`;

/** Same hover/colors; use when overriding padding (e.g. wide mobile CTA). */
export const primaryCtaCoreClasses = primaryCore;

export const secondaryCtaClasses =
  "bg-transparent text-salt-violet font-sans font-semibold text-sm tracking-[0.04em] px-7 py-3 rounded-[4px] border border-salt-violet hover:bg-salt-violet hover:text-white transition-all duration-200 cursor-pointer border-solid";
