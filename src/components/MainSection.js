import React, { useState } from 'react';
import EmployeeTable from './tables/EmployeeTable'
import AddEmployees from './forms/AddEmployees'
import ShowEmployees from './forms/ShowEmployees';
import { faPeopleArrows, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditEmployees from './forms/EditEmployee';

const MainSection = () => {

    const initialState = [{ id: "", firstname: "", surname: "", departement: "", quality: 0, knowledge: 0, communication: 0, team: 0, learning: 0, total: 0 },];

    const [employee, setEmployee] = useState(initialState)
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(false)
    

    const handleRead = (id, firstname, surname, departement, quality, knowledge, communication, team, learning, total) => {
        //console.log('main-handleRead', firstname, surname, quality)
        setEmployee({id: id, firstname: firstname, surname: surname, departement: departement, quality: quality, knowledge: knowledge, communication: communication, team: team, learning: learning, total: total})
        //console.log('current-employee', employee)
    }

    const handleEdit = (id, firstname, surname, departement, quality, knowledge, communication, team, learning, total) => {
        //console.log('main-handleRead', firstname, surname, quality)
        setEmployee({ id: id, firstname: firstname, surname: surname, departement: departement, quality: quality, knowledge: knowledge, communication: communication, team: team, learning: learning, total: total })
        //console.log('current-edit', employee)
    }

    const switchToShow = (status) => {
        setShow(status)
        setEdit(false)
    }

    const switchToCreate = (status) => {
        setShow(status)
        setEdit(false)
    }

    const switchToStart = (show, edit) => {
        setShow(show)
        setEdit(edit)
    }

    const switchToEdit = (status, d) => {
        setEdit(status)
        setShow(d)
    }

    return (
        <div className="row">
            <div className="col-lg-6 col-sm-12 left pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2><FontAwesomeIcon icon={faPeopleArrows} /> Evaluation</h2>
                        </div>
                    </div>
                    <EmployeeTable handleRead={handleRead} handleEdit={handleEdit} switchToShow={switchToShow} switchToEdit={switchToEdit} switchToStart={switchToStart} />
                </div>
            </div>
            <div className="col-lg-6 col-sm-12 right pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2><FontAwesomeIcon icon={faChartBar} /> Rate your Staff</h2>
                            {show && !edit && <ShowEmployees employee={employee} switchToCreate={switchToCreate} />}
                            {!show && !edit && <AddEmployees />}
                            {edit && !show && <EditEmployees employee={employee} switchToStart={switchToStart} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection