import { useState } from "react"
import '../styles/Edu.css'

const createTemplate = () => ({
  id: crypto.randomUUID(),
  items: [
    { name: "schoolName", label: "School Name", type: "text", value: "" },
    { name: "titleOfStudy", label: "Title Of Study", type: "", value: "" },
    { name: "from", label: "From", type: "date", value: "" },
    { name: "to", label: "To", type: "date", value: "" }]
})

function Edu({ edit }) {

  const [items, setItems] = useState([createTemplate()])

  function handleChange(e, groupId) {
    const { id: name, value } = e.target;
    console.log(name)
    setItems(prevItems =>
      prevItems.map(group => {
        if (group.id !== groupId) return group;

        const updatedItems = group.items.map(item => {
          if (item.name === name) {
            return { ...item, value };
          }
          return item;
        });

        return { ...group, items: updatedItems };
      })
    );
  }


  return (
    <section className='edu'>
      <div className="title">
        <h2>Education</h2>
        {edit ? <button>Add</button> : null}
      </div>

      {items.map(group => (
        <div key={group.id}>
          {group.items.slice(0, 2).map((item) => (
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

          <div key={group.id} className="oneline">
            {group.items.slice(2, 4).map((item) => (
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
    </section >
  )

}

export default Edu
