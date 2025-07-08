import { useEffect } from "react"

const REQUIRED_FIELDS = [
  { name: "name", label: "Full Name", type: "text", value: "" },
  { name: "email", label: "Email", type: "email", value: "" },
  { name: "phone", label: "Phone Number", type: "tel", value: "" }
]

function Gen({ edit, prefill, data, setData }) {
  useEffect(() => {
    if (prefill && data.length === 0) {
      const base = REQUIRED_FIELDS.map(item => ({
        ...item,
        value:
          item.name === "name"
            ? "John Doe"
            : item.name === "email"
              ? "john@example.com"
              : "9876543210"
      }))
      setData(base)
    }
  }, [prefill, setData, data.length])

  function handleChange(e) {
    const { name, value } = e.target
    setData(prev =>
      prev.map(item => (item.name === name ? { ...item, value } : item))
    )
  }

  return (
    <section className="gen">
      <div className="title">
        <h2>General Information</h2>
      </div>

      {data.map((item, index) => (
        <div key={`${item.name}-${index}`} className="form-group">
          <label htmlFor={`${item.name}-${index}`}>
            {item.label}:
          </label>
          {edit ? (
            <input
              name={item.name}
              type={item.type}
              id={`${item.name}-${index}`}
              value={item.value}
              onChange={handleChange}
            />
          ) : (
            <p className="show">
              {item.value}
            </p>
          )}
        </div>
      ))}
    </section>
  )
}

export default Gen

