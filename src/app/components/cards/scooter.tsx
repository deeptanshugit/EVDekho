import Image from "next/image"


interface ScooterProps {
    scooter: {
        image: string,
        name: string,
        price: string
    }
}

export default function Scooter(props: ScooterProps) {
    return (
        <div className="card">
            <Image src={props.scooter.image} alt="scooter" width={500} height={500} />
            <div className="card-body">
                <h5 className="card-title">{props.scooter.name}</h5>
                <h4>₹{props.scooter.price}</h4>
                <p className="card-text">On Road Price, Delhi</p>
                <a href="#" className="btn btn-primary outlined">See Specifications</a>
            </div>
        </div>
    )
}