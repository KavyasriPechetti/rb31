import React from "react";

import {Link} from 'react-router-dom'
import { connect } from "react-redux";

function Students({students}) {
    // console.log('store', props.students)


    return (
        <>
            <h1>All students List</h1>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Courses</th>
                        <th>Mode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student)=>{
                            return <tr>
                                <td><Link to={`/studentDetails/${student.cnumber}`}>{student.fname}</Link></td>
                                <td>{student.cnumber}</td>
                                <td>{student.courses.toString()}</td>
                                <td>{student.mode}</td>


                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default connect((store) => store)(Students)