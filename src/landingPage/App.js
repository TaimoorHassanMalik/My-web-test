import React from 'react';
import 'bulma/css/bulma.css'
import TimeTabs from './components/TimeTabs'
import QuestionSection from './components/QuestionSection'
import useWindowSize from "./useWindowsSize";
import LandingPageWeb from './LandingPageWeb';
import LandingPageMob from './LandingPageMob';

const App = (props) => {

    const clickHandler = () => {
        alert('You click on Button')
    }
    const { width } = useWindowSize();

    return (
        <>
            {width > 400 ? <LandingPageWeb /> : <LandingPageMob />}
        </>
    )
}

export default App