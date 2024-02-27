import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

function RegistrationForm(props) {
    console.log('props',props)

    let regForm=useFormik({
        initialValues:{
            'fname':"",
            'cnumber':"",
            'email':"",
            'mode':"",
            'courses':[]
        },
        onSubmit:(fdata)=>{
                props.dispatch({
                    type:'ADDSTUD',
                    payload:fdata
            })
        }
    })
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center ">

            
            <h2 className="text-center my-3 ms-auto">Registration Form</h2> 
            <button className="btn btn-primary ms-auto me-3"><Link  className="text-white" to="showall" >show all</Link></button>
            </div>

            <form className="row g-3 mx-5 d-flex flex-column align-items-center" onSubmit={regForm.handleSubmit}>

                <div className=" form-floating mb-3 col-md-6">
                    <input type="text" className="form-control"  placeholder="name" name="fname" onChange={regForm.handleChange}/>
                    <label>Full Name</label>
                </div>

                <div className=" form-floating mb-3 col-md-6">
                    <input type="text" className="form-control" placeholder="number" name="cnumber" onChange={regForm.handleChange}/>
                    <label>Contact</label>
                </div>

                <div className=" form-floating mb-3 col-md-6">
                    <input type="text" className="form-control" placeholder="email" name="email" onChange={regForm.handleChange}/>
                    <label>Email</label>
                </div>

                <div className="d-flex col-6">
                    <div className="checkboxes col-6">
                        <label className="form-label">Courses</label>


                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name='courses' value="Frontend with ReactJS" onChange={regForm.handleChange}/>
                                <label className="form-check-label">
                                    Frontend with ReactJS
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"  name='courses' value="Frontend with ANGULAR" onChange={regForm.handleChange}/>
                                <label className="form-check-label">
                                    Frontend with ANGULAR
                                </label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name='courses' value="MERN Full Stack" onChange={regForm.handleChange}/>
                                <label className="form-check-label" >
                                    MERN Full Stack
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name='courses' value="MEAN Full stack" onChange={regForm.handleChange}/>
                                <label className="form-check-label" >
                                    MEAN Full stack
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name='courses' value="Full Stack Java" onChange={regForm.handleChange}/>
                                <label className="form-check-label" >
                                    Full Stack Java
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="radiobuttons col-6">
                        <label className="form-label">Mode</label>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="mode" value="online" onChange={regForm.handleChange}/>
                            <label className="form-check-label" >
                                Online
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="mode" value="offline" onChange={regForm.handleChange}/>
                            <label className="form-check-label" >
                                Offline
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-6 d-flex justify-content-center mt-5">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    )
}

export default connect((store)=>store)(RegistrationForm);