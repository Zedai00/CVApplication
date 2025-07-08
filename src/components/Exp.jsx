import { useEffect } from "react"

const createTemplate = (withData = false) => ({
  id: crypto.randomUUID(),
  items: [
    { name: "companyName", label: "Company Name", type: "text", value: withData ? "TechCorp Inc." : "" },
    { name: "positionTitle", label: "Position Title", type: "text", value: withData ? "Frontend Developer" : "" },
    { name: "responsibility", label: "Responsibility", type: "text", value: withData ? "Built reusable UI components." : "" },
    { name: "from", label: "From", type: "date", value: withData ? "2023-01-01" : "" },
    { name: "to", label: "To", type: "date", value: withData ? "2024-12-31" : "" }
  ]
})

function Exp({ edit, prefill, data, setData }) {
  useEffect(() => {
    if (prefill && data.length === 0) {
      setData([createTemplate(true)])
    }
  }, [prefill, setData, data.length])

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
    <section className="exp">
      <div className="title">
        <h2>Experience</h2>
        {edit && <button onClick={handleAdd} type="button">＋</button>}
      </div>

      {data.map(group => (
        <div key={group.id} className="exp-group">
          {edit && data.length > 1 && (
            <button
              className="delete-btn"
              aria-label="Delete this experience"
              onClick={() => handleDelete(group.id)}
              type="button"
            >
              ×
            </button>
          )}

          {group.items.slice(0, 3).map(item => (
            <div key={`${item.name}-${group.id}`} className="form-group">
              <label htmlFor={`${item.name}-${group.id}`}>{item.label}:</label>
              {edit ? (
                <input
                  type={item.type}
                  id={`${item.name}-${group.id}`}
                  value={item.value}
                  onChange={(e) => handleChange(e, group.id)}
                />
              ) : (
                <p className="show">{item.value}</p>
              )}
            </div>
          ))}

          <div className="oneline">
            {group.items.slice(3).map(item => (
              <div key={`${item.name}-${group.id}`} className="form-group">
                <label htmlFor={`${item.name}-${group.id}`}>{item.label}:</label>
                {edit ? (
                  <input
                    type={item.type}
                    id={`${item.name}-${group.id}`}
                    value={item.value}
                    onChange={(e) => handleChange(e, group.id)}
                  />
                ) : (
                  <p className="show">{item.value}</p>
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

