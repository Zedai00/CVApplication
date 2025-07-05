import { useState } from "react"
import '../styles/Edu.css'

function Edu({ edit }) {
  const [schoolName, setSchoolName] = useState('')
  const [titleOfStudy, setTitleOfStudy] = useState('')
  const [dateOfStudy, setDateOfStudy] = useState('')

  const handleChange = (e) => {
    const label = e.target.previousElementSibling.getAttribute('for')
    switch (label) {
      case 'schoolName':
        setSchoolName(e.target.value)
        break
      case 'titleOfStudy':
        setTitleOfStudy(e.target.value)
        break
      case 'dateOfStudy':
        setDateOfStudy(e.target.value)
        break
    }
  }

  return (
    <section className='edu'>
      <div className="title">
        <h2>Education</h2>
        <button>Add</button>
      </div>
      <div className="form-group">
        <label htmlFor="schoolName">School Name:
        </label>
        {edit ? <input type="text" id="schoolName" onChange={handleChange} value={schoolName} /> :
          <input type="text" disabled className="show" />}
      </div>
      <div className="center">
        <div className="form-group">
          <label htmlFor="titleOfStudy">Title Of Study:
          </label>
          {edit ? <input type="text" id="titleOfStudy" onChange={handleChange} value={titleOfStudy} /> :
            <input type="text" disabled className="show" />}
        </div>
        <div className="form-group">
          <label htmlFor="dateOfStudy">Date Of Study:
          </label>
          {edit ? <input type="date" id="dateOfStudy" onChange={handleChange} value={dateOfStudy} /> :
            <input type="date" disabled className="show" />}
        </div>
      </div>
    </section >
  )

}

export default Edu
