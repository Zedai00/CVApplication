import { useEffect } from "react"

const createTemplate = (withData = false) => ({
  id: crypto.randomUUID(),
  items: [
    { name: "school", label: "School Name", type: "text", value: withData ? "Example High School" : "" },
    { name: "degree", label: "Degree", type: "text", value: withData ? "Bachelor of Science" : "" },
    { name: "from", label: "From", type: "date", value: withData ? "2018-06-01" : "" },
    { name: "to", label: "To", type: "date", value: withData ? "2022-05-01" : "" }
  ]
})

function Edu({ edit, prefill, data, setData }) {
  useEffect(() => {
    if (prefill) {
      setData([createTemplate(true)])
    }
  }, [prefill, setData])

  function handleChange(e, groupId) {
    const { id: name, value } = e.target
    setData(prev =>
      prev.map(group =>
        group.id !== groupId
          ? group
          : {
            ...group,
            items: group.items.map(item =>
              item.name === name ? { ...item, value } : item
            )
          }
      )
    )
  }

  function handleAdd() {
    setData(prev => [...prev, createTemplate(false)])
  }

  function handleDelete(idToDelete) {
    setData(prev => prev.filter(group => group.id !== idToDelete))
  }

  return (
    <section className="edu">
      <div className="title">
        <h2>Education</h2>
        {edit && <button onClick={handleAdd} type="button">＋</button>}
      </div>

      {data.map(group => (
        <div key={group.id} className="edu-group">
          {edit && data.length > 1 && (
            <button className="delete-btn" onClick={() => handleDelete(group.id)} type="button">×</button>
          )}
          {group.items.map(item => (
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
                <p className="show">
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default Edu

