/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import Searchbar from './Searchbar';
import Nav_side from "../Nav_side";
import { Link } from "react-router-dom"
import './button.css'


function Student() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users").then((result) => {
      result.json().then((response) => {
        console.log("result", response.data)
        setData(response);
      });
    });
  }, []);
  console.log();
  return (
    <>
        <Nav_side />
      <div>
        <Searchbar />
      </div>

      <br></br>
      {/* <br></br> */}
      <div id="studentTabel">
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
          {
            data.map((item) => (

              <tr className="border1" >

                <td>{item.node_id}</td>
                <td>{item.node_id}</td>
                <td>{item.node_id}</td>
                <td>{item.node_id}</td>
                <td>{item.node_id}</td>
                <td><span><Link to="/editProfile"><BsPencil /></Link>&nbsp;&nbsp;&nbsp;<RiDeleteBin6Line /></span></td>
                <td></td>
                <td><button id="view">View</button></td>
              </tr>
            ))
          }

        </table>
      </div>

    </>


  );
}

export default Student;

