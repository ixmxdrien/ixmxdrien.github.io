import { useEffect, useState } from 'react';
import './App.css';
import Hero from './sections/Hero/Hero';
import Resume from './sections/Resume/Resume';

// Hash-based routing keeps deep links working on GitHub Pages.
const getRoute = () => window.location.hash.replace(/^#\/?/, '');

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return <>{route === 'cv' ? <Resume /> : <Hero />}</>;
}

export default App;
