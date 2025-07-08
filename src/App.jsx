import { useState, useEffect } from "react"
import Gen from "./components/Gen"
import Edu from "./components/Edu"
import Exp from "./components/Exp"
import "./App.css"

function App() {
  const [edit, setEdit] = useState(true)

  const [genData, setGenData] = useState([])
  const [eduData, setEduData] = useState([])
  const [expData, setExpData] = useState([])

  function toggleEdit() {
    setEdit(prev => !prev)
  }

  function handlePrefill() {
    setEdit(true)

    setGenData([
      { name: "name", label: "Full Name", type: "text", value: "John Doe" },
      { name: "email", label: "Email", type: "email", value: "john.doe@example.com" },
      { name: "phone", label: "Phone Number", type: "tel", value: "123-456-7890" },
    ])

    setEduData([createEduTemplate(true)])

    setExpData([createExpTemplate(true)])
  }

  useEffect(() => {
    if (genData.length === 0) {
      setGenData([
        { name: "name", label: "Full Name", type: "text", value: "" },
        { name: "email", label: "Email", type: "email", value: "" },
        { name: "phone", label: "Phone Number", type: "tel", value: "" }
      ])
    }

    if (eduData.length === 0) {
      setEduData([createEduTemplate()])
    }

    if (expData.length === 0) {
      setExpData([createExpTemplate()])
    }
  }, [eduData.length, expData.length, genData.length])

  return (
    <div className="app">
      <div className="controls">
        <button onClick={toggleEdit}>{edit ? "Submit" : "Edit"}</button>
        <button onClick={handlePrefill}>Prefill</button>
        {!edit && <button onClick={() => window.print()}>Print</button>}
      </div>

      <form>
        <Gen edit={edit} data={genData} setData={setGenData} />
        <Edu edit={edit} data={eduData} setData={setEduData} />
        <Exp edit={edit} data={expData} setData={setExpData} />
      </form>
    </div>
  )
}

function createEduTemplate(withData = false) {
  return {
    id: crypto.randomUUID(),
    items: [
      { name: "school", label: "School Name", type: "text", value: withData ? "Springfield University" : "" },
      { name: "degree", label: "Degree", type: "text", value: withData ? "Bachelor of Science" : "" },
      { name: "from", label: "From", type: "date", value: withData ? "2018-08-01" : "" },
      { name: "to", label: "To", type: "date", value: withData ? "2022-05-30" : "" }
    ]
  }
}

function createExpTemplate(withData = false) {
  return {
    id: crypto.randomUUID(),
    items: [
      { name: "companyName", label: "Company Name", type: "text", value: withData ? "Acme Corp" : "" },
      { name: "positionTitle", label: "Position Title", type: "text", value: withData ? "Software Developer" : "" },
      { name: "responsibility", label: "Responsibility", type: "text", value: withData ? "Developed and maintained web applications." : "" },
      { name: "from", label: "From", type: "date", value: withData ? "2022-06-01" : "" },
      { name: "to", label: "To", type: "date", value: withData ? "2024-07-01" : "" }
    ]
  }
}

export default App

