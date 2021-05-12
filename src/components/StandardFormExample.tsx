import React, { ChangeEvent, FormEvent, useState } from 'react'
import { maskPhone, onlyNumber } from 'src/utils/masks'
import { validateEmail, validatePhone } from 'src/utils/validations'

type FormValues = {
  [param: string]: string;
  name: string;
  age: string;
  email: string;
  phone: string;
}

type FormErrors = FormValues
type InputNames = FormValues

type FormValidity = {
  [param: string]: boolean;
  name: boolean;
  age: boolean;
  email: boolean;
  phone: boolean;
}
let renderingCounter = 0

const StandardFormExample = () => {
  const [values, setValues] = useState<FormValues>({ name: '', age: '', email: '', phone: '' })
  const [errors, setErrors] = useState<FormErrors>({ name: '', age: '', email: '', phone: '' })
  const [valid, setValid] = useState<FormValidity>({ name: false, age: false, email: false, phone: false })
  const inputNames: InputNames = {
    name: 'Nome',
    age: 'Idade',
    email: 'Email',
    phone: 'Telefone'
  }
  renderingCounter++

  function handleChange (event: ChangeEvent<HTMLInputElement>, mask?: (value: string) => string) {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: mask ? mask(value) : value
    })
  }

  function handleValidation (target: { name: string, value: string }) {
    const { name, value } = target
    const formErrors = errors
    const formValid = valid

    // Required field
    formValid[name] = value.length > 0

    formErrors[name] = formValid[name]
      ? ''
      : `${inputNames[name]} é um campo obrigatório`

    if (formValid[name]) {
      if (name === 'age') {
        formValid[name] = parseInt(value) > 10
        formErrors[name] = formValid[name] ? '' : 'A idade deve ser maior que 10'
      }
      if (name === 'email') {
        formValid[name] = validateEmail(value)
        formErrors[name] = formValid[name]
          ? ''
          : 'O email digitado é inválido'
      }
      if (name === 'phone') {
        formValid[name] = validatePhone(value)
        formErrors[name] = formValid[name]
          ? ''
          : 'O número de telefone digitado é inválido'
      }
    }

    setValid({ ...formValid })
    setErrors({ ...formErrors })
  }

  function handleSubmit (event: FormEvent) {
    event.preventDefault()

    if (Object.values(valid).every(Boolean)) {
      console.log('values', values)
    } else {
      for (const key in values) {
        const target = {
          name: key,
          value: values[key]
        }
        handleValidation(target)
      }
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <header>
        <h3>Padrão</h3>
      </header>
      <div>
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          value={values.name}
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
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, onlyNumber)}
          value={values.age}
        />
        <span className='error'>{errors.age}</span>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          value={values.email}
        />
        <span className='error'>{errors.email}</span>
      </div>
      <div>
        <label htmlFor='phone'>Telefone</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, maskPhone)}
          value={values.phone}
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

export default StandardFormExample
