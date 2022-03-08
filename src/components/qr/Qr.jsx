import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context'
import QRCode from 'react-qr-code'
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';


import ('./Qr.css')

const Qr = () => {

    const {tableId, number} = useParams()
    const { user } = useContext(AuthContext);

    return (
        <>

        <QRCode className='qr' value={`https://waiterhack.herokuapp.com/${user._id}/${tableId}/vista-cliente`}></QRCode>
        <Button onClick={()=>window.print()}>Mesa {number}</Button>
        </>

    )

}

export default Qr