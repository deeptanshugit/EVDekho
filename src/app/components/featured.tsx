"use client"
import Image from "next/image";
import styles from "./featured.module.css"
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import VariantModal from "./modal/variantModal";
import PriceModal from "./modal/priceModal";


export default function Featured() {
    const [showVariantModal, setShowVariantModal] = useState(false);
    const [showPriceModal, setShowPriceModal] = useState(false);
    const handleVariantModalShow = () => setShowVariantModal(true);
    const handleVariantModalClose = () => setShowVariantModal(false);

    const handlePriceModalShow = () => setShowPriceModal(true);
    const handlePriceModalClose = () => setShowPriceModal(false);

    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="row align-items-start justify-content-around">

                        <div className="col">
                            <Image src="/honda-activa-6g.jpg" alt="hondaactiva" width={500} height={500} />
                        </div>

                        <div className="col">
                            <div className="row mt-5">
                                <div className="col"  onClick={handlePriceModalShow}>
                                    <div className={styles.variant}>
                                        <div className="row align-items-center justify-content-between d-flex">
                                            <div className="col-6">
                                                <p> City </p>
                                                <h6> Bengaluru, Karnataka </h6>
                                            </div>
                                            <div className="col-6 d-flex justify-content-around">
                                                <FontAwesomeIcon width={15} icon={faChevronRight} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" onClick={handleVariantModalShow}>
                                    <div className={styles.variant}>
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <p> Variant </p>
                                                <h6> Single Channel ABS </h6>
                                            </div>
                                            <div className="col d-flex justify-content-around">
                                                <FontAwesomeIcon width={15} icon={faChevronRight} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 className="mt-5">₹ 88,819</h3>
                            <p>On-Road Price, Delhi</p>
                            <Button variant="outline-primary">See Specifications</Button>{' '}
                        </div>
                    </div>

                </div>
            </div>
            <VariantModal showVariantModal={showVariantModal} handleClose={handleVariantModalClose}></VariantModal>
            <PriceModal showPriceModal={showPriceModal} handleClose={handlePriceModalClose}></PriceModal>
        </div>
    );
}