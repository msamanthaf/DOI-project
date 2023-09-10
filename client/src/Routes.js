import { Route, Routes } from 'react-router-dom';
import ROUTES from './statics/routes';
import About from './pages/About/About';
import FindMyMatch from './pages/FindMyMatch';
import Process from './pages/Process';
import Algorithm from './pages/Algorithm';
import Creators from './pages/Creators';
const AppSwitch = () => {
    return (
      <Routes>
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.FINDMYMATCH} element={<FindMyMatch />} />
        <Route path={ROUTES.PROCESS} element={<Process />} />
        <Route path={ROUTES.ALGORITHM} element={<Algorithm />} />
        <Route path={ROUTES.CREATORS} element={<Creators />} />
      </Routes>
    );
  }
  
  export default AppSwitch;