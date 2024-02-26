import Image from "next/image";
import styles from "./featured.module.css"

export default function Featured() {
    return (
        <div className="container">
            <div className="row">
                <div className="card">
                    <div className="row align-items-center justify-space-between">
                        <div className="col">
                            <Image src="/honda-activa-6g.jpg" alt="hondaactiva" width={500} height={500} />
                        </div>
                        <div className="col">
                            <h3>₹ 88,819</h3>
                            <p>On-Road Price, Delhi</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}