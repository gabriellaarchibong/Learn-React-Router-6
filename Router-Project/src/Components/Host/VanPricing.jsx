import { useOutletContext } from "react-router-dom"

function VanPricing() {
    const {vanId} = useOutletContext()
  return (
    <div style={{display: "flex", alignItems: "center", width:"50%", height: "50%", padding: "15px"}}>
        <p style={{fontSize: "2.5rem"}}><strong>${vanId.price}</strong>/day</p>
    </div>
  )
}

export default VanPricing