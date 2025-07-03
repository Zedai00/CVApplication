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
    <div className='gen'>
      <label htmlFor="name">Name:
      </label>
      {edit ? <input type="text" id="name" onChange={handleChange} value={name} /> : <div>{name}</div>}
      <label htmlFor="email">Email:
      </label>
      {edit ? <input type="text" id="email" onChange={handleChange} value={email} /> : <div>{email}</div>}
      <label htmlFor="phone">Phone:
      </label>
      {edit ? <input type="text" id="phone" onChange={handleChange} value={phone} /> : <div>{phone}</div>}
    </div>
  )

}

export default Gen
