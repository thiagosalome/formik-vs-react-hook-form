import React, { ChangeEvent } from 'react'
import { useFormik, FormikErrors, FormikValues } from 'formik'
import { maskPhone, onlyNumber } from 'src/utils/masks'
import { validateEmail, validatePhone } from 'src/utils/validations'

let renderingCounter = 0

const FormikExample = () => {
  const inputNames: FormikValues = {
    name: 'Nome',
    age: 'Idade',
    email: 'Email',
    phone: 'Telefone'
  }
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      phone: ''
    },
    onSubmit: (formValues) => {
      console.log('values', formValues)
    },
    validate: (values: FormikValues) => {
      const errors: FormikErrors<FormikValues> = {}

      Object.keys(values).forEach(key => {
        if (!values[key]) {
          errors[key] = `${inputNames[key]} é um campo obrigatório`
        } else {
          if (key === 'age' && parseInt(values[key]) <= 10) {
            errors[key] = 'A idade deve ser maior que 10'
          }
          if (key === 'email' && !validateEmail(values[key])) {
            errors[key] = 'O email digitado é inválido'
          }
          if (key === 'phone' && !validatePhone(values[key])) {
            errors[key] = 'O número de telefone digitado é inválido'
          }
        }
      })

      return errors
    }
  })
  renderingCounter++

  function onChange (event: ChangeEvent<HTMLInputElement>, mask?: (value: string) => string) {
    if (mask) {
      const newEvent = event
      newEvent.target.value = mask(event.target.value)
      handleChange(newEvent)
    } else {
      handleChange(event)
    }
  }

  return (
    <form className='form formik' onSubmit={handleSubmit}>
      <header>
        <h3>Formik</h3>
      </header>
      <div>
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          name='name'
          value={values.name}
          onChange={onChange}
        />
        <span className='error'>{errors.name}</span>
      </div>
      <div>
        <label htmlFor='age'>Idade</label>
        <input
          type='text'
          id='age'
          name='age'
          inputMode='numeric'
          value={values.age}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, onlyNumber)}
        />
        <span className='error'>{errors.age}</span>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={values.email}
          onChange={onChange}
        />
        <span className='error'>{errors.email}</span>
      </div>
      <div>
        <label htmlFor='phone'>Telefone</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={values.phone}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, maskPhone)}
        />
        <span className='error'>{errors.phone}</span>
      </div>
      <button type='submit'>Enviar</button>
      <div className='rendering'>
        Renderizações: {renderingCounter}
      </div>
    </form>
  )
}

export default FormikExample
