import { useState } from "react"
import '../styles/Exp.css'

function Exp({ edit }) {
  const [companyName, setCompanyName] = useState('')
  const [positionTitle, setPositionTitle] = useState('')
  const [responsibility, setResponsibility] = useState('')

  const handleChange = (e) => {
    const label = e.target.previousElementSibling.getAttribute('for')
    switch (label) {
      case 'companyName':
        setCompanyName(e.target.value)
        break
      case 'positionTitle':
        setPositionTitle(e.target.value)
        break
      case 'responsibility':
        setResponsibility(e.target.value)
        break
    }
  }

  return (
    <section className='exp'>
      <div className="title">
        <h2>Experience</h2>
        {edit ? <button>Add</button> : null}
      </div>
      <div className="form-group">
        <label htmlFor="companyName">Company Name:
        </label>
        {edit ? <input type="text" id="companyName" onChange={handleChange} value={companyName} /> :
          <input type="text" disabled className="show" />}
      </div>
      <div className="form-group">
        <label htmlFor="positionTitle">Position Title:
        </label>
        {edit ? <input type="text" id="positionTitle" onChange={handleChange} value={positionTitle} /> :
          <input type="text" disabled className="show" />}
      </div>
      <div className="form-group">
        <label htmlFor="responsibility">Responsibility:
        </label>
        {edit ? <input type="text" id="responsibility" onChange={handleChange} value={responsibility} /> :
          <input type="text" disabled className="show" />}
      </div>
    </section>
  )

}

export default Exp

