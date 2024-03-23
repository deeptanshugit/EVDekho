"use client";

import {
  Modal,
  ModalBody,
  ModalDialog,
  ModalHeader,
  ModalTitle,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import styles from './variantModal.module.css'

const variants = [
  {
    name: 'Retro Factory',
    price: '₹ 1,79,852'
  },
  {
    name: 'Metro Dapper',
    price: '₹ 2,02,154'
  },
  {
    name: 'Metro Rebel',
    price: '₹ 2,07,798'
  }
]

interface VariantModalProps {
  showVariantModal: boolean;
  handleClose: () => void;
}

export default function VariantModal(
  { showVariantModal, handleClose }: VariantModalProps,
  props: any
) {
  return (
    <div className="modal show" style={{ position: "initial" }}>
      <Modal {...props} size="lg" show={showVariantModal} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle> Variants </ModalTitle>
        </ModalHeader>

        <ModalBody>
          {variants.map((variant, index) => (
          <div key={index} className={styles.variantcontainer} >
          <Container>
            <Row>
              <Col xs={12} md={6}>
                {variant.name}
              </Col>
              <Col xs={6} md={6}>
                {variant.price}
              </Col>
            </Row>
          </Container>
          </div>
          ))}
        </ModalBody>
      </Modal>
    </div>
  );
}
