import { AnimatePresence } from 'framer-motion';
import {
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

import Onboarding from './pages/registration/onboarding';
import Registration from './pages/registration/registration';
import RegistrationFinish from './pages/registration/registrationFinish';
import RegistrationInfo from './pages/registration/registrationInfo';

const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial = {false}>
      <Switch location={location}  key={location.pathname}>
        <Route path="/" exact >
          <Onboarding />
        </Route>
        <Route path="/registration" exact >
          <Registration />
        </Route>
        <Route path="/registrationInfo" exact >
          <RegistrationInfo />
          </Route>
          <Route path="/registrationFinish" exact >
          <RegistrationFinish />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

export default Main


