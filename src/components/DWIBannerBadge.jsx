import dwiBannerSlide1 from '../assets/dwi-banner-slide1.png'

/**
 * DWIBannerBadge — always visible, scales with viewport.
 *
 * Mobile / tablet: compact badge anchored at top-4 right-3 (inside the hero's
 * pt-20 padding zone, safely to the right of all left-aligned text).
 *
 * wideHeading=false (max-w-3xl pages — Contact, ProductDetail):
 *   → Grows to full size from lg (1024px), shifts to standard top-[76px] position.
 *
 * wideHeading=true (max-w-4xl pages — About, Quality, Sustainability, GlobalPresence):
 *   → Stays compact through lg; grows to full size only from xl (1280px).
 */
export function DWIBannerBadge({ className = '', wideHeading = false }) {
  const base = 'pointer-events-none absolute z-20 top-4 right-3 w-[58px] sm:right-4 sm:w-[76px] md:right-5 md:w-[100px]'

  const desktopClasses = wideHeading
    ? 'xl:top-[80px] xl:right-12 xl:w-[180px] 2xl:right-16 2xl:w-[210px]'
    : 'lg:top-[76px] lg:right-8 lg:w-[148px] xl:top-[80px] xl:right-12 xl:w-[180px] 2xl:right-16 2xl:w-[210px]'

  return (
    <div className={`${base} ${desktopClasses} ${className}`}>
      <img
        src={dwiBannerSlide1}
        alt="DWI approved drinking water inspectorate banner"
        className="h-auto w-full rounded-xl object-contain shadow-[0_8px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/15"
      />
    </div>
  )
}
