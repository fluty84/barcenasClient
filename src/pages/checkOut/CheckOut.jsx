import ToPay from "../../components/checkout/ToPay/ToPay"
import FinalOrder from "../../components/checkout/FinalOrder/FinalOrder"
import { useState } from "react"

const CheckOut = () => {

    const [totalData, setTotalData] = useState([])

 const getDataFromFinalOrder = (data) => {
       
        setTotalData(data)
     

    }




    return( 
    
    <>
    <FinalOrder getDataFromFinalOrder={getDataFromFinalOrder}/>
    <ToPay totalData={totalData}/>
   
    </>
    )
}

export default CheckOut



