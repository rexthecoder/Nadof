import Registration from './pages/registration/registration';
import * as serviceWorker from './serviceWorker';

const Main = () => {
  return (

    <Registration />

  )
}

export default Main

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
