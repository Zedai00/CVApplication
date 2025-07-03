import { useState } from 'react'
import Gen from './components/Gen'
import Edu from './components/Edu'
import Exp from './components/Exp'
import './App.css'

function App() {
  const [edit, setEdit] = useState(false)


  return (
    <div className='app'>
      <Gen edit={edit} />
      <Edu edit={edit} />
      <Exp edit={edit} />
      <button id="edit" onClick={() => setEdit(!edit)}>{edit ? "Submit" : "Edit"}</button>
      <div>{edit.toString()}</div>
    </div>
  )
}


export default App
