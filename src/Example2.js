function MyResponsiveComponent() {
    const width = useWindowWidth(); // Our custom Hook
    return (
      <p>Window width is {width}</p>
    );
  }
  function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
    
    return width;
}



function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    // const handleResize = () => setWidth(window.innerWidth);
    // window.addEventListener("resize", handleResize);
    useEffect(() => {
      setWidth(window.innerWidth);
      return () => {
        // window.removeEventListener("resize", handleResize);
      };
    });
  
    return width;
  }