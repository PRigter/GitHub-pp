import React, { useEffect } from "react"
import SearchUserRepos from "./SearchUserRepos/SearchUserRepos"
import Repo from "../PopularRepos/Repo/Repo"
import "./Repositories.css"

const Repositories = (props) => {
  
  useEffect(() => {
    let mounted = true
    console.log("mounted:", mounted)
    let setActiveTab = props.setActiveTab
    
    // CLEAN UP STATE - WHEN CONPONENT IS UNMOUNTED
    return () => {
        mounted = false
        console.log("mounted:", mounted)
        setActiveTab("Overview")
    }
  }, [])

    // FILTER - SEARCH REPOS FORM - LOOKS FOR EVERY INDEX ON REPO NAME
    let filteredRepos = props.reposDetails.filter((filterRepo) => {
        return filterRepo.name.toLowerCase().indexOf(props.reposInput) !== -1
    })


    return (
      <div className="repos-container">
          <div className="repos-form-container">
              <SearchUserRepos
                setReposInput={props.setReposInput}
                reposInput={props.reposInput} />
          </div>
          <div className="repos-list">
            {filteredRepos.map((repo) => {
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
 
export default Repositories