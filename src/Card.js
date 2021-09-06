const Card = (props) => {
    return ( 
        <div className="card" style={ {"max-width": "20rem", "width": "100%"} }>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonLink} className="btn btn-primary">{props.buttonLabel}</a>
                style={{"background-image": "url('https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=702&q=80"}}>
            </div>
        </div>
     );
}
 
export default Card;