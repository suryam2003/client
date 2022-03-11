import React from "react";
import './static.css';
function StudentTable() {

    return (


        <table id="customers" className="table table-sm">
            <thead style={{ position: 'sticky', top: '135px', width: '100%', backgroundColor: '#f4f7fc', zIndex: '5' }}>
                <tr>
                    <th> Student Name</th>
                    <th>Skill's</th>
                    <th >Catagoury</th>
                    <th>Progress</th>
                    <th >Status</th>
                    <th >Operation</th>
                    <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <th width="" >Action</th>
                    <th>&nbsp;&nbsp;</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>

    );
}

export default StudentTable;
