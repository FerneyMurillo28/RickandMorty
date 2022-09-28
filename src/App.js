import './App.css';
import Header from './Componentes/RYM';
import Personajes from './Componentes/Personajes';
import { Fragment } from 'react';

function App() {
  return (
    <>
      <Fragment>
        <Header
          title="Rick y Morty"
        />
      </Fragment>
      <Personajes/>
    </>
  );
}

export default App;
