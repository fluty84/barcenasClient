import ToPay from "../../components/checkout/toPay/ToPay.jsx"
import FinalOrder from "../../components/checkout/FinalOrder/FinalOrder"
import { useState } from "react"

const CheckOut = () => {

    const [totalData, setTotalData] = useState([])

    getDataFromFinalOrder = (data) => {
       

        setTotalData(data)
        console.log(data)

    }




    return( 
    
    <>
    <FinalOrder getDataFromFinalOrder={getDataFromFinalOrder}/>
    <ToPay />
   
    </>
    )
}

export default CheckOut



