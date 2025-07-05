import { useState } from 'react'
import Gen from './components/Gen'
import Edu from './components/Edu'
import Exp from './components/Exp'
import './App.css'

function App() {
  const [edit, setEdit] = useState(false)

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      setEdit(!edit)
    })

  })



  return (
    <div className='app'>
      <form action="#">
        <Gen edit={edit} />
        <Edu edit={edit} />
        <Exp edit={edit} />
        {edit ? <button type="submit">Submit</button> : <button onClick={() => setEdit(!edit)}>Edit</button>}
      </form>
      <div>{edit.toString()}</div>
    </div>
  )
}


export default App
