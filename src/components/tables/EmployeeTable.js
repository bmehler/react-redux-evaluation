import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { employeeDeleted } from "../../reducers/index";
import { Stars } from '../Utilities/Stars';
import { faUserCheck, faEye, faPenToSquare, faTrash, faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EmployeeTable(props) {

    const dispatch = useDispatch();
    let employees = useSelector((state) => state.employees);
    employees = [...employees].sort((a, b) => b.total - a.total)

    const handleRead = (id, firstname, surname, departement, quality, knowledge, communication, team, learning, total) => {
        var showView = true
        props.switchToShow(showView)
        props.handleRead(id, firstname, surname, departement, quality, knowledge, communication, team, learning, total)
    }

    const handleEdit = (id, firstname, surname, departement, quality, knowledge, communication, team, learning, total) => {
        var editView = true
        var showView = false
        props.switchToEdit(editView, showView)
        props.handleEdit(id, firstname, surname, departement, quality, knowledge, communication, team, learning, total)
    }

    const handleDelete = (id) => {
        var createView = false
        var showView = false
        props.switchToStart(createView, showView)
        dispatch(employeeDeleted({ id }));
    };

    return (
        <div className="row">
            {employees.map(({ id, firstname, surname, departement, quality, knowledge, communication, team, learning, total }, i) => (
                <div key={i} className="col-lg-6 col-sm-12 list">
                    <div className="card mt-3">
                        <div className="card-header">
                            <FontAwesomeIcon icon={faUserCheck} /> {firstname} {surname}
                            <span className="float-end"><Stars total={total} /></span>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Departement: {departement}</li>
                            <li className="list-group-item">
                                <div className="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                    <div className={`progress-bar progress-bar ${total < 30 ? 'bg-danger' : total >= 30 && total <= 60 ? 'bg-warning' : 'bg-success'}`} style={{ width: total + '%' }}>Avg. {parseInt(total)}%</div>
                                </div>      
                            </li>
                            <li className="list-group-item">
                                <button type="button" onClick={() => handleDelete(id)} className="btn btn-sm btn-danger float-end"><FontAwesomeIcon icon={faTrash} /><span className="button-label"> Delete</span></button>
                                <button type="button" onClick={() => handleRead(id, firstname, surname, departement, quality, knowledge, communication, team, learning, total)} className="btn btn-sm btn-outline-danger me-1 float-end"><FontAwesomeIcon icon={faEye} /><span className="button-label"> Show</span></button>
                                <button type="button" onClick={() => handleEdit(id, firstname, surname, departement, quality, knowledge, communication, team, learning, total)} className="btn btn-sm btn-dark me-1 float-end"><FontAwesomeIcon icon={faPenToSquare} /><span className="button-label"> Edit</span></button>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EmployeeTable