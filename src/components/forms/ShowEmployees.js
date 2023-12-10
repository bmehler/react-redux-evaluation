import React from 'react';
import { faCancel, faListCheck, faBrain, faComments, faPeopleGroup, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShowEmployees(props) {

    const switchToCreate = () => {
        var showView = false
        props.switchToCreate(showView)
    }

    return (
        <div>
            <div className="row mt-3 mb-3">
                <h4 className="pb-3">Results for {props.employee.firstname} {props.employee.surname}</h4>
                <div className="card mb-3">
                    <div className="card-header cards-show">
                        <FontAwesomeIcon icon={faListCheck} /> Quality of Work
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div className={`progress-bar progress-bar ${props.employee.quality < 30 ? 'bg-danger' : props.employee.quality >= 30 && props.employee.quality <= 60 ? 'bg-warning' : 'bg-success'}`} style={{ width: props.employee.quality + '%' }}>{props.employee.quality}%</div>
                            </div>   
                        </li>
                    </ul>
                </div>
                <div className="card mb-3">
                    <div className="card-header cards-show">
                        <FontAwesomeIcon icon={faBrain} /> Knowledge of expertise
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div className={`progress-bar progress-bar ${props.employee.knowledge < 30 ? 'bg-danger' : props.employee.knowledge >= 30 && props.employee.knowledge <= 60 ? 'bg-warning' : 'bg-success'}`} style={{ width: props.employee.knowledge + '%' }}>{props.employee.knowledge}%</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card mb-3">
                    <div className="card-header cards-show">
                        <FontAwesomeIcon icon={faComments} /> Ability of communication
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div className={`progress-bar progress-bar ${props.employee.communication < 30 ? 'bg-danger' : props.employee.communication >= 30 && props.employee.communication <= 60 ? 'bg-warning' : 'bg-success'}`} style={{ width: props.employee.communication + '%' }}>{props.employee.communication}%</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card mb-3">
                    <div className="card-header cards-show">
                        <FontAwesomeIcon icon={faPeopleGroup} /> Teamwork Skills
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div className={`progress-bar progress-bar ${props.employee.team < 30 ? 'bg-danger' : props.employee.team >= 30 && props.employee.team <= 60 ? 'bg-warning' : 'bg-success'}`} style={{ width: props.employee.team + '%' }}>{props.employee.team}%</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card">
                    <div className="card-header cards-show">
                        <FontAwesomeIcon icon={faGraduationCap} /> Ability to Learn
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                <div className={`progress-bar progress-bar ${props.employee.learning < 30 ? 'bg-danger' : props.employee.learning >= 30 && props.employee.learning <= 60 ? 'bg-warning' : 'bg-success'}`} style={{ width: props.employee.learning + '%' }}>{props.employee.learning}%</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <button type="button" onClick={() => switchToCreate()} className="btn btn-lg btn-outline-dark mt-3"><FontAwesomeIcon icon={faCancel} /> Cancel</button>
            </div>
        </div>
    )

}

export default ShowEmployees