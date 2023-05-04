export default function Card(props) {
    let badgeText
    if (props.openSpots === 0 ) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    } 

    return (
        
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={props.img}></img>
            <div className="rating"><i class="fa-solid fa-star"></i><p>{props.rating} <span>{props.reviews}</span></p></div>
            <p>{props.headline}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    )
}