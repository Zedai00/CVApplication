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
    <div className='gen'>
      <label htmlFor="schoolName">School Name:
      </label>
      {edit ? <input type="text" id="schoolName" onChange={handleChange} value={schoolName} /> : <div>{schoolName}</div>}
      <label htmlFor="titleOfStudy">Title Of Study:
      </label>
      {edit ? <input type="text" id="titleOfStudy" onChange={handleChange} value={titleOfStudy} /> : <div>{titleOfStudy}</div>}
      <label htmlFor="dateOfStudy">Date Of Study:
      </label>
      {edit ? <input type="text" id="dateOfStudy" onChange={handleChange} value={dateOfStudy} /> : <div>{dateOfStudy}</div>}
    </div>
  )

}

export default Edu
