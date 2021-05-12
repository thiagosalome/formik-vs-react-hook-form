import React, { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { maskPhone, onlyNumber } from 'src/utils/masks'
import { validateEmail, validatePhone } from 'src/utils/validations'

let renderingCounter = 0

type FormValues = {
  [param: string]: string;
  name: string;
  age: string;
  email: string;
  phone: string;
}

const FormikExample = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  renderingCounter++

  function submitForm (values: FormValues) {
    console.log('values', values)
  }

  return (
    <form className='form' onSubmit={handleSubmit(submitForm)}>
      <header>
        <h3>React Hook Form</h3>
      </header>
      <div>
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          id='name'
          {...register('name', {
            required: 'Nome é um campo obrigatório'
          })}
        />
        <span className='error'>{errors.name?.message}</span>
      </div>
      <div>
        <label htmlFor='age'>Idade</label>
        <input
          type='text'
          id='age'
          inputMode='numeric'
          {...register('age', {
            required: 'Idade é um campo obrigatório',
            min: {
              value: 11,
              message: 'A idade deve ser maior que 10'
            }
          })}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setValue('age', onlyNumber(event.target.value))}
        />
        <span className='error'>{errors.age?.message}</span>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          {...register('email', {
            required: 'Email é um campo obrigatório',
            validate: {
              isEmail: value => validateEmail(value) || 'O email digitado é inválido'
            }
          })}
        />
        <span className='error'>{errors.email?.message}</span>
      </div>
      <div>
        <label htmlFor='phone'>Telefone</label>
        <input
          type='tel'
          id='phone'
          {...register('phone', {
            required: 'Telefone é um campo obrigatório',
            validate: {
              isPhone: value => validatePhone(value) || 'O número de telefone digitado é inválido'
            }
          })}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setValue('phone', maskPhone(event.target.value))}
        />
        <span className='error'>{errors.phone?.message}</span>
      </div>
      <button type='submit'>Enviar</button>
      <div className='rendering'>
        Renderizações: {renderingCounter}
      </div>
    </form>
  )
}

export default FormikExample
