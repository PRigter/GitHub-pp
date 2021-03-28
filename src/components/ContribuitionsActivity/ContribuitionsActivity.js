import { RepoPushIcon } from "@primer/octicons-react"
import { Button } from "react-bootstrap"
import "./ContribuitionsActivity.css"

const ContribuitionsActivity = (props) => {
    const updateBtnClass = (e) => {
        // props.setSelectedBtn(true) -- Rever a melhor forma / ao clicar num botão, o state estará a associado a todos os botões - não é o pretendido
        if (e.target.classList.contains("btn-light")) {
          e.target.classList.remove("btn-light")
          e.target.classList.add("btn-primary")      
        } else if (e.target.classList.contains("btn-light")) {
          e.target.classList.remove("btn-primary")
          e.target.classList.add("btn-light") 
        }
      }

    return (
        <div className="contribuition-activity-container">
            <div className="contribuition-activity-left-panel">
                <div className="contribuition-title-container">
                    <h3 className="contribuition-title">Contribution activity</h3>
                </div>
                <div className="contribuition-history-panel">
                    <h3 className="history-last-month">March 2021</h3>
                    <div className="time-line-icon">
                        <RepoPushIcon size={16} />
                    </div>
                    <div className="time-line-container">
                        <h4 className="time-line-title">
                            Created 14 Commits in 2 repos
                        </h4>
                        <span className="time-line-item">
                            <a href="#">PRIGTER 12 coommits</a>
                        </span>
                        <span className="time-line-item">
                            <a href="#">PRIGTER 12 coommits</a>
                        </span>
                    </div>
                </div>
                <div className="show-more-activity-container">
                        <Button variant="light" className="show-more-activity-title">Show more activity</Button>
                    </div>
            </div>
            <div className="contribuition-activity-right-panel">
                {/* A ser revisto - qual a melhor abordagem qd para toogle/alterar estilos */}
                <Button 
                    variant="primary"
                    className="btn-contribuition-year"
                    onClick={(e) => { e.target.classList.add("isBtnSelected")}}>2021
                </Button>
                <Button 
                    variant={`${props.selectedBtn ? "primary" : "light"}`}
                    className="btn-contribuition-year"
                    onClick={updateBtnClass}>2020
                </Button>
                <Button 
                    variant={`${props.selectedBtn ? "primary" : "light"}`}
                    className="btn-contribuition-year"
                    onClick={updateBtnClass}>2019
                </Button>
                <Button 
                    variant={`${props.selectedBtn ? "primary" : "light"}`}
                    className="btn-contribuition-year"
                    onClick={updateBtnClass}>2018
                </Button>
                <Button 
                    variant={`${props.selectedBtn ? "primary" : "light"}`}
                    className="btn-contribuition-year"
                    onClick={updateBtnClass}>2017
                </Button>
            </div>
        </div>
    )
}
 
export default ContribuitionsActivity