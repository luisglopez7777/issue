import React from 'react'

import '../assets/styles/components/BadgeForm.css'

const BadgeForm = ({ onSubmit }) => {
  return (
    <div className='BadgeForm'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <h2>Editar Perfil</h2>
          <label htmlFor='nickNameForm'>
            Apodo
            <input
            // onChange={this.props.onChange}
              className='inputEdit'
              type='text'
              id='nickNameForm'
            />
          </label>
        </div>

        <div className='form-group'>
          <label htmlFor='lastNameForm'>
            Apellido
            <input
            // onChange={this.props.onChange}
              className='inputEdit'
              type='text'
              id='lastNameForm'
            />
          </label>
        </div>

        <div className='form-group'>
          <label htmlFor='contactForm'>
            Contacto
            <input
            // onChange={this.props.onChange}
              className='inputEdit'
              type='text'
              id='contactForm'
            />
          </label>
        </div>

        <div className='form-group'>
          <label htmlFor='categoryForm'>
            Categoría
            {/* <select onChange={this.props.onChange} value={this.props.formValues.category}name="category" className="selector"> */}
            <select className='seleccion form-control' id='categoryForm'>
              <option defaultValue />
              <option>A</option>
              <option>B</option>
              <option>C</option>
              <option>D</option>
            </select>
            <input type='text' />
          </label>
        </div>

        <div className='form-group'>
          <label htmlFor='typeForm'>
            Tipo
            {/* <select onChange={this.props.onChange} value={this.props.formValues.type}name="type" className="selector type"> */}
            <select className='seleccion-type-edit form-control' id='typeForm'>
              <option defaultValue />
              <option>singles</option>
              <option>dobles</option>
              <option>singles y dobles</option>
            </select>
          </label>
        </div>

        <div className='form-group'>
          <label htmlFor='descriptionForm'>
            Horario / Descripción
            <input
            // onChange={this.props.onChange}
              className='inputEdit'
              type='text'
              id='descriptionForm'
            />
          </label>
        </div>

        {/* {this.props.error && (<p className="text-danger">{this.props.error.message}</p>)} */}

        {/* {(!this.props.formValues.lastName
                    || !this.props.formValues.nickName
                    || !this.props.formValues.contact
                    || !this.props.formValues.category
                    || !this.props.formValues.type
                    || !this.props.formValues.description )
                    && (<p className="text-danger">Llena todos los campos para poder continuar</p>)}

                    {(this.props.formValues.lastName
                    &&this.props.formValues.nickName
                    &&this.props.formValues.contact
                    &&this.props.formValues.category
                    &&this.props.formValues.type
                    &&this.props.formValues.description )
                    && (<button onClick={this.handleClick} className="btn btn-primary">Continuar</button>)} */}
      </form>
    </div>
  )
}
export default BadgeForm
