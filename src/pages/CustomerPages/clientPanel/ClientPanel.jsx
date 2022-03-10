
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import NavbarClient from '../../../components/navbarClient/NavbarClient'
import { Button } from 'react-bootstrap'

import './ClientPanel.css'


const ClientPanel = () => {

    const { _id, tableId } = useParams()


    return (
        <>
            <NavbarClient> </NavbarClient>
            <h1>Bienvenido a WaiterHack</h1>
            <p>Buen Provecho</p>
            <Row>
                <Col md={6}>
                    <Button className="btn-primary" href={`/${_id}/${tableId}/customer-order`}>Haz tu pedido</Button>
                </Col>

                <Col md={6}>
                    <Button className = "btn-primary" href={`/restaurante/${_id}/${tableId}/check-out`}>Pago</Button>
                </Col>
            </Row>
           


        </>
    )
}

export default ClientPanel