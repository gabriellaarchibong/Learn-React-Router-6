import { useOutletContext } from "react-router-dom"

function Detail() {
    const {vanId} = useOutletContext()
  return (
    <section style={{display: "flex", flexDirection: "column", padding: "10px", margin: "10px", fontSize: "1.5rem"}}>
        <h4><strong>Name:</strong> {vanId.name}</h4>
        <p style={{fontFamily: "sans-serif"}}><strong>Category:</strong> {vanId.type}</p>
        <p><strong>Description:</strong> {vanId.description}</p>
        <p><strong>Visibility:</strong> public</p>
    </section>
  )
}

export default Detail