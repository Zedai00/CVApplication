import { useState } from "react"
import '../styles/Exp.css'

const createTemplate = () => ({
  id: crypto.randomUUID(),
  items: [
    { name: "companyName", label: "Company Name", type: "text", value: "" },
    { name: "positionTitle", label: "Position Title", type: "text", value: "" },
    { name: "responsibility", label: "Responsibility", type: "text", value: "" },
    { name: "from", label: "From", type: "date", value: "" },
    { name: "to", label: "To", type: "date", value: "" }
  ]
})

function Exp({ edit }) {
  const [items, setItems] = useState([createTemplate()])

  function handleChange(e, groupId) {
    const { id: name, value } = e.target;
    setItems(prevItems =>
      prevItems.map(group => {
        if (group.id !== groupId) return group;

        const updatedItems = group.items.map(item =>
          item.name === name ? { ...item, value } : item
        );

        return { ...group, items: updatedItems };
      })
    );
  }

  function handleAdd() {
    setItems(prev => [...prev, createTemplate()])
  }

  function handleDelete(idToDelete) {
    setItems(prev => prev.filter(group => group.id !== idToDelete))
  }

  return (
    <section className='exp'>
      <div className="title">
        <h2>Experience</h2>
        {edit && <button type="button" className="add-btn" onClick={handleAdd}>＋</button>}
      </div>

      {items.map(group => (
        <div key={group.id} className="exp-group">
          {edit && items.length > 1 && (
            <button type="button" className="delete-btn" onClick={() => handleDelete(group.id)}>×</button>
          )}

          {group.items.slice(0, 3).map(item => (
            <div key={`${item.name}-${group.id}`} className="form-group">
              <label htmlFor={item.name}>{item.label}:</label>
              {edit ? (
                <input
                  type={item.type}
                  id={item.name}
                  value={item.value}
                  onChange={(e) => handleChange(e, group.id)}
                />
              ) : (
                <input
                  type={item.type}
                  value={item.value}
                  disabled
                  className="show"
                />
              )}
            </div>
          ))}

          <div className="oneline">
            {group.items.slice(3, 5).map(item => (
              <div key={`${item.name}-${group.id}`} className="form-group">
                <label htmlFor={item.name}>{item.label}:</label>
                {edit ? (
                  <input
                    type={item.type}
                    id={item.name}
                    value={item.value}
                    onChange={(e) => handleChange(e, group.id)}
                  />
                ) : (
                  <input
                    type={item.type}
                    value={item.value}
                    disabled
                    className="show"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Exp

