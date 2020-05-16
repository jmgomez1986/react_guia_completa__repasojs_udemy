import React, { Fragment } from 'react';
import Formulario from './components/Formulaio'

function App() {
  return (
    <Fragment>
      <h1>Adminisrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
