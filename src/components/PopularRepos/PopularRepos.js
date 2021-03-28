import Repo from "./Repo/Repo"
import "./PopularRepos.css"

const PopularRepos = (props) => {

    return (
        <div className="popular-repos-container">
            <div className="popular-repos-title-container">
                <h3 className="popular-repos-title">Popular repositories</h3>
            </div>
            <div className="popular-repos-grid">
                {props.reposDetails.reverse().slice(0, 6).map((repo) => {
                    return <Repo
                        name={repo.name}
                        description={repo.description}
                        language={repo.language}
                        stars={repo.stargazers_count}
                        key={repo.id} />
                })}
            </div>    
        </div>
    )
}
 
export default PopularRepos