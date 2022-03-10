import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import restaurantService from "../../../services/restaurant.services"
import RegisterCustomer from "../registerCustomer/RegisterCustomer"
import LoginCustomer from "../loginCostumer/LoginCustomer"


const LandingCustomer = () => {

    const [table, setTable] = useState()
    const [isTable, setIsTable] = useState(false)


    const { tableId } = useParams()


    useEffect(() => {
        if (isTable) { getTable()
}
       
       
    }, [isTable])


    const getTable = () => {

        restaurantService
            .checkTable(tableId)
            .then(response => setTable(response.data))
            .then(() => setIsTable(true))
            .catch(err => console.log(err))
    }

    return (

        <>
            <h1>Bienvenido a la web LANDING COMPONENT</h1>

            {isTable && table.password ? <p> <LoginCustomer tablePassword={table.password}></LoginCustomer></p> : <RegisterCustomer></RegisterCustomer>}

        </>
    )
}

export default LandingCustomer