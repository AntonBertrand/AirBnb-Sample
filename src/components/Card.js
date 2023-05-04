export default function Card(props) {
    return (
        
        <div className="card">
            <img className="card--img" src={props.img}></img>
            <div className="rating"><i class="fa-solid fa-star"></i><p>{props.rating} <span>{props.reviews}</span></p></div>
            <p>{props.headline}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}