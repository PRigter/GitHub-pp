import { useHistory } from "react-router-dom"
import { MarkGithubIcon } from "@primer/octicons-react"
import { Button } from "react-bootstrap"
import "./Navbar.css"

const Navbar = (props) => {
    const history = useHistory()

    const handleBackButton = () => {
        props.setHasValidData(false)
        history.push("/")
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <MarkGithubIcon className="nav-icon" fill="white" aria-label="GitHub" size={38} />
                <span className="nav-title">GitHub Search</span>
            </div>
            {props.hasValidData ? <Button variant="warning" className="btn-back" onClick={handleBackButton}>Back</Button> : null }   
        </div>
     )
}

export default Navbar