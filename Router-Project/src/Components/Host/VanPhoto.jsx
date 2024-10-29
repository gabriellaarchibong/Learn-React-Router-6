import { useOutletContext } from "react-router-dom"

function VanPhoto() {
    const {vanId} = useOutletContext()
  return (
    <div style={{width: "70%", height:"70%", padding: "15px", margin: "10px"}}>
        <img style={{width:"100%", height: "100%"}} src={vanId.imageUrl} alt={vanId.name} />
    </div>
  )
}

export default VanPhoto