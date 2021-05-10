import React, { ChangeEvent, FormEvent, useState } from 'react'
import { maskPhone, onlyNumber } from '../utils/masks'

type FormValues = {
  name: string;
  age: string;
  email: string;
  phone: string;
}

type FormErrors = FormValues

type FormValidity = {
  name: boolean;
  age: boolean;
  email: boolean;
  phone: boolean;
}

const StandardFormExample = () => {
  const [values, setValues] = useState<FormValues>({ name: '', age: '', email: '', phone: '' })
  const [errors, setErrors] = useState<FormErrors>({ name: '', age: '', email: '', phone: '' })
  const [valid, setValid] = useState<FormValidity>({ name: false, age: false, email: false, phone: false })

  function handleChange (event: ChangeEvent<HTMLInputElement>, mask?: (value: string) => string) {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: mask ? mask(value) : value
    })
  }

  function handleValidation () {

  }

  function handleSubmit (event: FormEvent) {
    event.preventDefault()
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
      </div>
      <button type='submit'>Enviar</button>
    </form>
  )
}

export default StandardFormExample
