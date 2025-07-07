import { useState } from "react"
import '../styles/Gen.css'

function Gen({ edit }) {

  const [items, setItems] = useState([
    { name: "name", type: "text", value: "" }, { name: "email", type: "email", value: "" }, {
      name: "phone", type: "tel", value: ""
    }]);


  function handleChange(e) {
    const { name, value } = e.target
    setItems(
      items.map(item => {
        if (item.name === name) {
          return { ...item, value: value }
        }
        return item
      })
    )
  }


  return (
    <section className='gen' >
      <div className="title">
        <h2>General Information</h2>
        {edit ? <button>Add</button> : null}
      </div>
      {items.map(item => {
        return (
          <div key={item.name} className="form-group">
            <label htmlFor={item.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}:
            </label>
            {edit ? <input name={item.name} required="true" {...item.extraArgs} type={item.type} id={item.name} onChange={handleChange} value={item.value} /> : <input type="text" disabled className="show" />}
          </div>
        )
      })
      }
    </section >
  )

}

export default Gen
