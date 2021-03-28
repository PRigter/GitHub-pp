import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import "./App.css"
// APP COMPONENTS
import Details from "../components/Details/Details"
import Navbar from "../components/Navbar/Navbar"
import SearchForm from "../components/SearchForm/SearchForm"
import UnderLineNav from "../components/UnderLineNav/UnderLineNav"
import PopularRepos from "../components/PopularRepos/PopularRepos"
import GitHubCalendar from 'react-github-calendar';
import ContribuitionsActivity from "../components/ContribuitionsActivity/ContribuitionsActivity"
import Repositories from "../components/Repositories/Repositories"


function App() {
  // **********
  // GLOBAL STATES
  // **********
  // FIRST WAVE FETCHED DATA FROM GITHUB API
  const [name, setName] = useState("")
  const [userName, setUserName] = useState("")
  const [followers, setFollowers] = useState("")
  const [following, setFollowing] = useState("")
  const [repos, setRepos] = useState("")
  const [avatar, setAvatar] = useState("")
  const [location, setLocation] = useState("")
  const [siteLink, setSiteLink] = useState("")
  
 
// SECOND WAVE FETCHED DATA FROM GITHUB API
  const [reposDetails, setReposDetails] = useState([])

  const [userInput, setUserInput] = useState("")
  const [error, setError] = useState("")
  const [hasValidData, setHasValidData] = useState(false)
  const [selectedBtn, setSelectedBtn] = useState(false)
  const [activeTab, setActiveTab] = useState("Overview")
  const [reposInput, setReposInput] = useState("")

 
// DESTRUTURING OBJECT - DATA FETCHED ON SEARCH FORM COMPONENT AND ALL SET'S BELOW STATES
// USER DETAILS INFO
const personalInfo = ({name, login, followers, following, public_repos, avatar_url, location, blog}) => {
  setName(name)
  setUserName(login)
  setFollowers(followers)
  setFollowing(following)
  setRepos(public_repos)
  setAvatar(avatar_url)
  setLocation(location)
  setSiteLink(blog)
}

// DESTRUTURING OBJECT - DATA FETCHED ON SEARCH FORM COMPONENT AND ALL SET'S BELOW STATES
// REPOS DETAILS
const reposDetailsInfo = (reposDetails) => {
  setReposDetails(reposDetails)
}

  // **********
  // ROOT TEMPLATE
  // **********
  return (
    <Router>
      <Switch>
        {/* HOME/MAIN ROUTE */}
        <Route exact path="/">
          <div className="App">
            <Navbar />
            <SearchForm 
              setUserInput={setUserInput}
              userInput={userInput}
              setError={setError}
              personalInfo={personalInfo}
              reposDetailsInfo={reposDetailsInfo}
              setHasValidData={setHasValidData} />
            {hasValidData ? <Redirect to={`/${userName}`} /> : null}
          </div>
        </Route>
        {/* USER DETAILS ROUTE */}
        <Route exact path="/:username">
          { hasValidData ? (
            <div className="App">
              <Navbar
                hasValidData={hasValidData}
                setHasValidData={setHasValidData} />
              <UnderLineNav
                repos={repos}
                activeTab={activeTab}
                setActiveTab={setActiveTab} />
              <Container>
              <div className="main-section">
                <Row>
                <Col sm="4" className="left-section px-0">
                  <Details
                    setHasValidData={setHasValidData}
                    name={name}
                    userName={userName}
                    followers={followers}
                    following={following}
                    repos={repos}
                    avatar={avatar}
                    location={location}
                    siteLink={siteLink} />
                </Col>
                <Col sm="8" className="center-section">
                  { activeTab === "Repositories" ? (
                    <Repositories
                     setActiveTab={setActiveTab}
                     reposDetails={reposDetails}
                     setReposInput={setReposInput}
                     reposInput={reposInput} />
                  ) : ( 
                    <div>
                      <PopularRepos reposDetails={reposDetails} />
                      <div className="contributions-calendar">
                        <GitHubCalendar username={userName} />
                      </div>
                      <ContribuitionsActivity selectedBtn={selectedBtn} />
                    </div> ) }
                </Col>    
                </Row>
              </div>
              </Container>
            </div>
          ) : (<h2>Input is Empty</h2>) }
        </Route>
      </Switch>
    </Router>    
  )
}

export default App
