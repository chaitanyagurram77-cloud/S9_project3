import { Link } from "react-router-dom"
import "./styles.css"

function Master(){
    return(
        <>
        <div className="home">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <br></br>
        <h1>This is the About page !!!!</h1>
        </div>        
        </>
    )
}


export default Master