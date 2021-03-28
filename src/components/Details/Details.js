import { PeopleIcon, NorthStarIcon, LocationIcon, MailIcon, LinkIcon } from "@primer/octicons-react"
import { Button, Card } from "react-bootstrap"
import "./Details.css"

const Details = (props) => {

    return (    
        <div className="details-container">         
            <div className="personal-info-container">
                <Card style={{ maxWidth: "280px" }} className="card">
                    <Card.Img className="card-image" variant="top" src={props.avatar}  alt="user avatar" />
                    <Card.Body className="content">
                    <Card.Title className="title">{props.name}</Card.Title>
                        <div className="userName">{props.userName}</div>
                        <div className="btn-follow-container">
                        <Button variant="light" className="btn-follow"><a href="https://github.com/login?return_to=%2FPRigter" target="_blank">Follow</a></Button>
                        <Button variant="light" className="btn-more">...</Button>
                        </div>
                        <div className="follow-stats-container">
                            <div className="followers-container">
                                <a href={`https://github.com/${props.userName}?tab=followers`} target="_blank" className="followers">
                                    <PeopleIcon size={16} verticalAlign="middle" /> {props.followers} Followers</a>
                                    <span className="space-dot">&#9741;</span>
                            </div>
                            <div className="following">{props.following}Following</div>
                        </div>
                        <div className="contacts-container">
                            <ul className="contacts-details">
                                <li className="contact-details">
                                    <span className="contact-details-icon"><LocationIcon size={16} /></span>
                                    <span className="contact-location-description">{props.location}</span>
                                </li>
                                <li className="contact-details">
                                    <span className="contact-details-icon"><MailIcon size={16} /></span>
                                    <span className="contact-location-description">Sign in to view email</span>
                                </li>
                                <li className="contact-details">
                                    <span className="contact-details-icon"><LinkIcon size={16} /></span>
                                    <span className="contact-site-link">{props.siteLink}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="highlights-container">
                            <h2 className="highlight-title">HighLights</h2>
                            <span className="highlight-icon"><NorthStarIcon size={14} /></span>
                            <span className="highlight-text">Artic Code Vault Contibutor</span>
                        </div> 
                    </Card.Body>
                </Card>  
            </div>
        </div>
    )   
}
 
export default Details;