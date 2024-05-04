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

import styles from "./variantModal.module.css";
import { useEffect, useState } from "react";

const variants = [
  {
    name: "Retro Factory",
    price: "₹ 1,79,852",
  },
  {
    name: "Metro Dapper",
    price: "₹ 2,02,154",
  },
  {
    name: "Metro Rebel",
    price: "₹ 2,07,798",
  },
];

interface VariantModalProps {
  showVariantModal: boolean;
  handleClose: () => void;
  vehicleId: number;
  onVariantSelect: (variant: string) => void
}

export default function VariantModal({ showVariantModal, handleClose, onVariantSelect }: VariantModalProps,props: any) {
  const [vehicleVariants, setVehicleVariants] = useState([]);

  const handleVariantSelect = (variant: string) => {
    console.log(variant);
    onVariantSelect(variant)
    handleClose()
  }

  const fetchVariants = async () => {
    try {
      const response = await fetch(
        `https://evdekho-backend-7f6f8ecf5616.herokuapp.com/api/v1/variants/${props.vehicleId}`
      );
      const variants = await response.json();

      setVehicleVariants(variants.variants);
    } catch (error) {
      console.error("Error fetching variants:", error);
    }
  };

  const handleModalShow = () => {
    fetchVariants();
  };

  return (
    <div className="modal show" style={{ position: "initial" }}>
      <Modal
        {...props}
        size="lg"
        show={showVariantModal}
        onHide={handleClose}
        onShow={handleModalShow}
      >
        <ModalHeader closeButton>
          <ModalTitle> Variants </ModalTitle>
        </ModalHeader>

        <ModalBody>
          {vehicleVariants &&
            vehicleVariants.length > 0 &&
            vehicleVariants.map((variant: any, index: any) => (
              <div key={index} className={styles.variantcontainer}>
                <Container>
                  <Row onClick={() => (handleVariantSelect(variant.name))}>
                    <Col xs={12} md={6} sm={12} lg={6}>
                      <div>
                        <h5>{variant.name}</h5>
                        <p>
                          {" "}
                          {variant.range} | {variant.topSpeed}{" "}
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} md={6} sm={12} lg={6}>
                      <div>
                        <h5>₹ {variant.price}</h5>
                      </div>
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
