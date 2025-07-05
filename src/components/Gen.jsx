import { useState } from "react"
import '../styles/Gen.css'

function Gen({ edit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (e) => {
    const label = e.target.previousElementSibling.getAttribute('for')
    switch (label) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'phone':
        setPhone(e.target.value)
        break
    }
  }

  return (
    <section className='gen'>
      <div className="title">
        <h2>General Information</h2>
        <button>Add</button>
      </div>
      <div className="form-group">

        <label htmlFor="name">Name:
        </label>
        {edit ? <input type="text" id="name" onChange={handleChange} value={name} /> : <input type="text" disabled className="show" />}
      </div>
      <div className="form-group">

        <label htmlFor="email">Email:
        </label>
        {edit ? <input type="text" id="email" onChange={handleChange} value={email} /> : <input type="text" disabled className="show" />}

      </div>
      <div className="form-group">

        <label htmlFor="phone">Phone:
        </label>
        {edit ? <input type="text" id="phone" onChange={handleChange} value={phone} /> : <input type="text" disabled className="show" />}

      </div>
    </section>
  )

}

export default Gen
