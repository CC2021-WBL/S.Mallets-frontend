import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props: any) => {
  const location = useLocation();
  useEffect(() => {
    // TODO: firefox seems to not work on first click
    window.scroll({ top: 0, behavior: 'smooth' });
  }, [location]);
  return <>{props.children}</>;
};

export default ScrollToTop;
