import React from 'react'
import './Project.css';


export default function Searchbar() {

  return (
    <div id='ser'  class="position-relative">

      <form id='fo' class="d-flex position-fixed  start-50 translate-middle-x">

        <input id='in' class="form-control me-2 " type="search" placeholder="Search By Skill's..." />

        <button id='bu' class="btn btn-outline-primary " type="submit">Search</button>


      </form>
    </div>

  )
}

