import { useState } from 'react'
import Gen from './components/Gen'
import Edu from './components/Edu'
import Exp from './components/Exp'
import './App.css'

function App() {
  const [edit, setEdit] = useState(true)

  function toggleMode(e) {
    e.preventDefault()
    setEdit(prev => !prev)
  }

  return (
    <div className='app'>
      <form onSubmit={toggleMode}>
        <Gen edit={edit} />
        <Edu edit={edit} />
        <Exp edit={edit} />
        <div className="action">
          <button type="submit">
            {edit ? 'Submit' : 'Edit'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App

