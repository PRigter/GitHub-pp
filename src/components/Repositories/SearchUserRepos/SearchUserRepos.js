import { Form } from "react-bootstrap"
import "./SearchUserRepos.css"

const SearchUserRepos = (props) => {
    const handleSearchRepos = (e) => {
        const inputValue = e.target.value
        props.setReposInput(inputValue)
    }

    return (    
        <Form id="search-form" className="search-repos-form" onSubmit={(e) => e.preventDefault()}>
            <Form.Group>
                <Form.Control
                    className="search-input"
                    onChange={handleSearchRepos}
                    size="sm" 
                    type="text"
                    name="search-repos"
                    id="search-repos" 
                    placeholder="Find a repository..." />
            </Form.Group>
        </Form>
    )
}
 
export default SearchUserRepos