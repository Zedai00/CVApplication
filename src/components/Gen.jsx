import { useState } from "react"
import '../styles/Gen.css'

function Gen({ edit }) {

  const [items, setItems] = useState([
    { name: "name", type: "text", value: "" }, { name: "email", type: "email", value: "" }, {
      name: "phone", type: "tel", value: "", extraArgs: { pattern: '^[0-9]*$', }
    }]);


  function setValue(name, value) {
    setItems(
      items.map(item => {
        if (item.name === name) {
          return { ...item, value: value }
        }
        return item
      })
    )
  }


  const handleChange = (e) => {
    const label = e.target.previousElementSibling.getAttribute('for')
    setValue(label, e.target.value)
  }

  const phone = document.querySelector("#phone")
  phone.setCustomValidity("Please Enter Phone No only")

  return (
    <section className='gen' >
      <div className="title">
        <h2>General Information</h2>
        {edit ? <button>Add</button> : null}
      </div>
      {items.map(item => {
        return (
          <div className="form-group">
            <label htmlFor={item.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}:
            </label>
            {edit ? <input required="true" {...item.extraArgs} type={item.type} id={item.name} onChange={handleChange} value={item.value} /> : <input type="text" disabled className="show" />}
          </div>
        )
      })
      }
    </section >
  )

}

export default Gen
