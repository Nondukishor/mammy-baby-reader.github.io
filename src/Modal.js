import React from "react";
import { Modal, Row, Col } from "react-bootstrap";
const ReadModal = ({ show, alphabet, onHide }) => {
  return (
    <Modal onHide={onHide} show={show} centered>
      <Modal.Header closeButton>
        <Modal.Title className="h2 text-success">Mummy! I can read {alphabet}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={6}><img width="200" height="200" src="https://media.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif" alt="baby"/></Col>
          <Col xs={6} className="text-center">
            <div className="d-flex justify-content-center align-items-center">
            <h2 className="text-danger" style={{fontSize:'150px'}}>{alphabet}</h2></div></Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ReadModal;
