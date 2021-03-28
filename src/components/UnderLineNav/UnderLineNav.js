import { BookIcon, RepoIcon } from "@primer/octicons-react"
import "./UnderLineNav.css"


const UnderLineNav = (props) => {
    const handleActiveTab = (e) => {
        const selectedTab = e.target.innerHTML
        props.setActiveTab(selectedTab)
        const tabItems = Array.from(document.getElementsByClassName("underline-nav-link"))

        tabItems.forEach(item => {
            item.classList.remove("selected")
            e.target.parentElement.classList.add("selected")
        })
    }
    
    return ( 
        <div className="underline-container">
            <div className="underline-nav">
                <div className="underline-nav-links">
                    <span className="underline-nav-link selected" onClick={handleActiveTab}>
                        <span className="underline-nav-link-icon"><BookIcon size={16} /></span>
                        <span className="link-name">Overview</span>
                    </span>
                    <span className="underline-nav-link" onClick={handleActiveTab}>
                        <span className="underline-nav-link-icon">
                        <RepoIcon size={16} />
                        </span>
                        <span className="link-name">Repositories</span>
                        <span className="totalRepos">{props.repos}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
 
export default UnderLineNav;