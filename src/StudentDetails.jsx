import React from "react";
import { json, useParams } from "react-router-dom";
import { connect } from 'react-redux'



function StudentDetails({ students }) {
    const sparams = useParams()
    const [sdetails, setSdetails] = React.useState(null)
    // console.log(props)

    React.useEffect(() => {

        setSdetails(students.find((student) => { return student.cnumber === sparams.contactNum }))




    }, [sparams])

    return <div>
        {/* {JSON.stringify(sdetails)} */}
        <h1>Details</h1>
        <div class="card">
            <div class="card-body">
                <h6>Name :{sdetails.fname}</h6>
                <h6>Contact :{sdetails.cnumber}</h6>
            </div>
        </div>



    </div>
}

export default connect((store) => store)(StudentDetails)