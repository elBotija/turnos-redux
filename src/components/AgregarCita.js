import React, { Component } from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types'

// redux
import { connect } from 'react-redux'
import { agregarCita } from '../actions/citasActions'
import { mostrarError } from '../actions/errorActions'

class AgregarCita extends Component{

    componentWillMount(){
        this.props.mostrarError(false)
    }

    // ref
    nombreMascotaRef = React.createRef()
    propietarioRef = React.createRef()
    fechaRef = React.createRef()
    horaRef = React.createRef()
    sintomasRef = React.createRef()

    crearNuevaCita = (e) => {
        e.preventDefault()

        const mascota =  this.nombreMascotaRef.current.value,
              propietario = this.propietarioRef.current.value,
              fecha = this.fechaRef.current.value,
              hora = this.horaRef.current.value,
              sintomas = this.sintomasRef.current.value

        if( mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.props.mostrarError(true)
        }else{
            const nuevaCita ={
                id: uuid(),
                mascota,
                propietario,
                fecha,
                hora,
                sintomas
            }

            //se envia el objeto al padre
            this.props.agregarCita(nuevaCita)

            //reiniciar formulario
            e.currentTarget.reset()

            this.props.mostrarError(false)
        }

    }

    render(){
        const existeError = this.props.error
        return(
            <div className='card mt-5'>
                <div className='card-body'>
                    <h2 className='card-title text-center mb-5'>
                        Agrega las citas aquí
                    </h2>
                    <form onSubmit={this.crearNuevaCita}>
                      <div className="form-group row">
                        <label className="col-sm-4 col-lg-3 col-form-label">Nombre Mascota</label>
                        <div className="col-sm-8 col-lg-9">
                            <input type="text" ref={this.nombreMascotaRef} className="form-control" placeholder="Nombre Mascota" />
                        </div>
                      </div>
                      <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-9">
                                <input type="text" ref={this.propietarioRef} className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                            </div>
                      </div>

                       <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" ref={this.fechaRef} className="form-control" />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-3">
                                <input type="time" ref={this.horaRef} className="form-control" />
                            </div>
                      </div>

                      <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-9">
                                <textarea ref={this.sintomasRef} className="form-control"></textarea>
                            </div>
                      </div>
                      <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                      </div>
                  </form>
                  { existeError ? <div className='alert alert-danger text-center'>Todos los campos son obligatorios</div> : '' }
                </div>
            </div>
        )
    }
}

AgregarCita.propTypes = {
    agregarCita: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    citas: state.citas.citas,
    error: state.error.error
})

export default connect(mapStateToProps, {agregarCita, mostrarError}) (AgregarCita)
