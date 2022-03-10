import CreateTable from "../createTable/CreateTable";
import { AuthContext } from "../../context/auth.context";
import { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Box, Button, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { red } from '@mui/material/colors'

import './RestaurantPanel.css'

const color = red[50]

const RestaurantPanel = () => {
  const value = useContext(AuthContext);
  const { _id } = value.user;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Row className="justify-content-md-center mt-5 resPanel">
        <Col md={6} className="mb-5">
          <h1>Bar Cenas</h1>
        </Col>
        <Row className="justify-content-md-center mt-5">
          <Col className="modifyMenuBtn" md={6}>
           
              <Button href={`/restaurante/${_id}/menu`} className="btn-primary">Modificar Menú</Button>
          
          </Col>
          <Col className="newTableModal" md={6}>
            <Button onClick={handleOpen} className="btn-primary">Añadir Mesas</Button>
            <Modal
              className="modalTables"
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                </Typography>
                
                <CreateTable
                  className='createTable'
                  tableNumbers={value}
                  handleClose={handleClose}
                ></CreateTable>
              
              </Box>
            </Modal>
          </Col>
          <Col>
            
            <Button href={`/panel`} className="btn-primary">Jornada</Button>
        
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default RestaurantPanel;
