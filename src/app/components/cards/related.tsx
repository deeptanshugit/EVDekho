import Image from "next/image"

export default function Related() {
    return (
        <div className="card">
            <Image src="/tvs-ronin.jpg" alt="hondaactiva" width={500} height={300} />
            <div className="card-body">
                <h5 className="card-title">TVS Ronin</h5>
                <p className="card-text">225.9cc | 40 kmpl | 20.3 bhp</p>
                <h4>₹ 1,76,774</h4>
                <p className="card-text">On Road Price, Delhi</p>
                <a href="#" className="btn btn-primary outlined">View Pricebreakup</a>
            </div>
        </div>
    )
}