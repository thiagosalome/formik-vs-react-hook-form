import React from 'react'

// import { Container } from './styles';

const FormikExample: React.FC = () => {
  return (
    <form className='form formik' action=''>
      <header>
        <h3>Formik</h3>
      </header>
      <div>
        <label htmlFor='name'>Nome</label>
        <input type='text' id='name' name='name' />
      </div>
      <div>
        <label htmlFor='age'>Idade</label>
        <input type='text' id='age' name='age' inputMode='numeric' />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' />
      </div>
      <div>
        <label htmlFor='phone'>Telefone</label>
        <input type='tel' id='phone' name='phone' />
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default FormikExample
