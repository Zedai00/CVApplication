import { useState } from "react"
import '../styles/Gen.css'

function Gen({ edit }) {
  const [items, setItems] = useState([
    { name: "name", label: "Name", type: "text", value: "", hint: "Enter your full name" },
    { name: "email", label: "Email", type: "email", value: "", hint: "Enter your email address" },
    { name: "phone", label: "Phone", type: "tel", value: "", hint: "Enter your phone number" }
  ])

  const [customFields, setCustomFields] = useState([])
  const [newField, setNewField] = useState({ label: '', value: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setItems(prevItems =>
      prevItems.map(item => (item.name === name ? { ...item, value } : item))
    )
  }

  function handleCustomChange(e, index, field) {
    const updated = [...customFields]
    updated[index][field] = e.target.value
    setCustomFields(updated)
  }

  function handleAddCustomField() {
    if (!newField.label.trim()) return
    setCustomFields([...customFields, { ...newField, permanent: true }])
    setNewField({ label: '', value: '' })
  }

  function handleDeleteCustom(index) {
    setCustomFields(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <section className='gen'>
      <div className="title">
        <h2>General Information</h2>
        {edit && <button type="button" onClick={handleAddCustomField}>＋</button>}
      </div>

      {items.map(item => (
        <div key={item.name} className="form-group">
          <label htmlFor={item.name}>{item.label}:</label>
          {edit ? (
            <input
              name={item.name}
              type={item.type}
              id={item.name}
              placeholder={item.hint}
              onChange={handleChange}
              value={item.value}
              required
            />
          ) : (
            <input type="text" value={item.value} disabled className="show" />
          )}
        </div>
      ))}

      {edit && (
        <div className="custom-field-pair">
          <input
            type="text"
            placeholder="Custom Label"
            value={newField.label}
            onChange={(e) => setNewField({ ...newField, label: e.target.value })}
          />
          <input
            type="text"
            placeholder="Value"
            value={newField.value}
            onChange={(e) => setNewField({ ...newField, value: e.target.value })}
          />
        </div>
      )}

      {customFields.map((field, index) => (
        <div key={index} className="form-group">
          <label>{field.label}:</label>
          {edit ? (
            <div className="custom-inline">
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleCustomChange(e, index, 'value')}
              />
              <button type="button" className="delete-btn" onClick={() => handleDeleteCustom(index)}>×</button>
            </div>
          ) : (
            <input type="text" value={field.value} disabled className="show" />
          )}
        </div>
      ))}
    </section>
  )
}

export default Gen
