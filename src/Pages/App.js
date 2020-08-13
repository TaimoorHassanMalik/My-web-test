import React, { useState, useEffect } from "react";
import HomePage from './HomePage/HomePage'

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <viewportContext.Provider value={{ width, height }}>
            {children}
        </viewportContext.Provider>
    )
}

export const useViewport = () => {
    const { width, height } = React.useContext(viewportContext);
    return { width, height };
};

const App = () => {
    return (
        <ViewportProvider>
            <HomePage />
        </ViewportProvider>
    );
}
export default App