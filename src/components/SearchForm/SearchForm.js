import { Button, Form } from "react-bootstrap"
import "./SearchForm.css"

const SearchForm  = (props) => {
    const handleInput = (e) => {
        props.setUserInput(e.target.value)
        console.log(props.userInput)
    }
      
    const handleSubmit = (e) => {
        e.preventDefault()

        const userProfile = `https://api.github.com/users/${props.userInput}`
        const userRepos = `https://api.github.com/users/${props.userInput}/repos`

        // FETCH USER DETAILS
        fetch(userProfile)
        .then(res => res.json())
        .then(profileData => {
            if (profileData.message) {
                props.setError(profileData.message)
            } else {
                props.setError(null)
                props.personalInfo(profileData)
                props.setHasValidData(true)

                // 2nd FETCH - ONLY IF "userProfile" data is found
                return fetch(userRepos)
            }
        })
        .then(res => res.json())
        .then(reposData => {
            if (reposData.message) {
                props.setError(reposData.message)
            } else {
                console.log(reposData)
                props.setError(null)
                props.reposDetailsInfo(reposData)
            }   
        })
        .catch(err => console.log(err))
    }
    
    return ( 
        <Form inline className="searchForm" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control className="search-input" onChange={handleInput} size="lg" type="text" name="searchInput" id="searchInput"placeholder="Github User" />
                <Button size="lg" className="btn-form" type="submit">Search</Button>
            </Form.Group>
        </Form>
    )
}
 
export default SearchForm 