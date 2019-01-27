import React, { Component } from 'react';
import Header from './components/Header'
import AgregarCita from './components/AgregarCita'
import ListaCitas from './components/ListaCitas'

// Redux
import { Provider } from 'react-redux'
import store from './store'

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <div className="container">
                <Header
                    title="Administrador Turnos Veterinaria"
                />
                <div className='row'>
                    <div className='col col-md-6'>
                        <AgregarCita/>
                    </div>
                    <div className='col col-md-6'>
                        <ListaCitas/>
                    </div>
                </div>
            </div>
        </Provider>
    );
  }
}

export default App;
