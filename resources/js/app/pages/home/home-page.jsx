import React, { useEffect } from 'react'
import HomeSectionBanner from './sections/home-section-banner'
import HomeSectionAbout from './sections/home-section-about'
import HomeSectionSocials from './sections/home-section-socials'
import HomeSectionPricing from './sections/home-section-pricing'
import store from '../../../store/store'
import { addCartProducts } from '../../redux/app-thunk'
import HomeSectionButton from './sections/home-section-button'

export default function HomePage() {
    // useEffect(() => {
    //     store.dispatch(addCartProducts('22'))
    // }, []);
    return (
        <>
            <HomeSectionBanner />
            <HomeSectionAbout />
            <HomeSectionPricing />
            <HomeSectionSocials />
        </>
    )
}
