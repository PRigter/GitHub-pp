import { StarIcon } from "@primer/octicons-react"
import "./Repo.css"

const Repo = (props) => {
    
    return (
        <div className="pop-repos-grid-item">
            <a href="#" className="pop-repo-name">{props.name}</a>
            <p className="pop-repo-description">{props.description}</p>
            <p className="pop-repo-language">
            <span className="repo-language-color"></span>
            <span className="repo-programing-Language">{props.language}</span>
            {props.stars ? (
                <div>
                    <StarIcon size={16} />
                    {props.stars} 
                </div>
            ) : ( null ) }
            </p>                       
        </div>
    )
}

export default Repo

