import React from 'react'
import HomeSectionBanner from './sections/home-section-banner'
import HomeSectionAbout from './sections/home-section-about'
import HomeSectionSocials from './sections/home-section-socials'
import HomeSectionPricing from './sections/home-section-pricing'

export default function HomePage() {
    return (
        <>
            <HomeSectionBanner />
            <HomeSectionAbout />
            <HomeSectionPricing />
            <HomeSectionSocials />
        </>
    )
}
