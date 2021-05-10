import React from 'react'

// Components
import StandardFormExample from './components/StandardFormExample'
import FormikExample from './components/FormikExample'
import ReactHookFormExample from './components/ReactHookFormExample'

// Styles
import './styles/index.scss'

function App () {
  return (
    <div>
      <header className="header">
        <h1>Formik vs React Hook Form</h1>
      </header>
      <div className='container'>
        <div className='grid'>
          <StandardFormExample />
          <FormikExample />
          <ReactHookFormExample />
        </div>
      </div>
    </div>
  )
}

export default App
