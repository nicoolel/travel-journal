export default function Card(props){
    console.log(props)
    return(
        <div className="card-container">
            <img className="card-img" src={`../images/${props.item.img}`} alt="travel"></img>
            <div className="trip">
                <div className="location-details">
                    <span>{props.item.place}</span>
                    <a href={props.item.googleLink}>Visit on Google Maps</a>
                </div>
                <h3>{props.item.title}</h3>
                <div className="trip-details">
                    <span>{props.item.dates}</span>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}