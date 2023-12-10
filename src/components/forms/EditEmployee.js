import React from 'react';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { faCancel, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { employeeEdit } from "../../reducers/index";

function EditEmployees(props) {

    const dispatch = useDispatch();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [data, setData] = useState("");

    useEffect(() => {
        setValue("id", props.employee.id);
        setValue("firstname", props.employee.firstname);
        setValue("surname", props.employee.surname);
        setValue("departement", props.employee.departement);
        setValue("quality", props.employee.quality);
        setValue("knowledge", props.employee.knowledge);
        setValue("communication", props.employee.communication);
        setValue("team", props.employee.team);
        setValue("learning", props.employee.learning);
    });

    const handleBackToCreate = () => {
        var createView = false
        var showView = false
        props.switchToStart(createView, showView)
    }

    const onSubmit = (data) => {
        let total = ((parseInt(data.quality) +
            parseInt(data.knowledge) +
            parseInt(data.communication) +
            parseInt(data.team) +
            parseInt(data.learning)) / 500) * 100

        dispatch(
            employeeEdit({
                id: data.id,
                firstname: data.firstname,
                surname: data.surname,
                departement: data.departement,
                quality: data.quality,
                knowledge: data.knowledge,
                communication: data.communication,
                team: data.team,
                learning: data.learning,
                total: total
            })
        );

        var createView = false
        var showView = false
        props.switchToStart(createView, showView)
    }

    return (
        <div>
            <div className="row mt-3 mb-3">
                <div className="col-lg-12">
                    <h4>Edit an Employee</h4>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">Firstname</label>
                    <input {...register("id")} type="hidden" />
                    <input {...register("firstname", { required: true })} type="text" className="form-control form-control-lg" id="firstname" placeholder="Firstname" />
                    {errors.firstname && <span className="error">This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input {...register("surname", { required: true })} type="text" className="form-control form-control-lg" id="surname" placeholder="Surname" />
                    {errors.surname && <span className="error">This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="departement" className="form-label">Department</label>
                    <input {...register("departement", { required: true })} type="text" className="form-control form-control-lg" id="departement" placeholder="Departement" />
                    {errors.departement && <span className="error">This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="quality" className="form-label">Evaluate quality</label>
                    <select {...register("quality")} name="quality" className="form-select form-select-lg" aria-label="Default select example">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="knowledge" className="form-label">Evaluate knowledge</label>
                    <select {...register("knowledge", { required: true })} className="form-select form-select-lg" aria-label="Default select example">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="communication" className="form-label">Evaluate communication</label>
                    <select {...register("communication", { required: true })} className="form-select form-select-lg" aria-label="Default select example">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="team" className="form-label">Evaluate team</label>
                    <select {...register("team", { required: true })} className="form-select form-select-lg" aria-label="Default select example">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="learning" className="form-label">Evaluate learning</label>
                    <select {...register("learning", { required: true })} className="form-select form-select-lg" aria-label="Default select example">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <p>{data}</p>
                <button type="submit" className="btn btn-lg btn-outline-dark mt-3 mb-5"><FontAwesomeIcon icon={faEdit} /> Edit</button>
                <button type="button" onClick={() => handleBackToCreate()} className="btn btn-lg btn-dark mt-3 mb-5 mx-2"><FontAwesomeIcon icon={faCancel} /> Cancel</button>
            </form>
        </div>
    );
}

export default EditEmployees