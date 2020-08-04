const { useEffect, useState } = React;

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        }
        window.addEventListener("resize", handleResize);
        // Clean up!
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}

const App = () => {
    const [height, width] = useWindowSize();
    return (
        <div className="box">
            <h1>useWindowSize Hook</h1>
            <p>
                height: {height}<br />
        width: {width}
            </p>
        </div>
    );
}