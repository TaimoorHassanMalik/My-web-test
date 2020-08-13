import React from 'react'
import HomePageMobile from './HomePageMobile'
import HomePageDesktop from './HomePageDesktop'
import { useViewport } from '../App'

const HomePage = () => {
    const { width } = useViewport();
    const breakpoint = 768;
    console.log('Width Size ', width)

    return width < breakpoint ? <HomePageMobile /> : <HomePageDesktop />;
};
export default HomePage