import React, { useState } from 'react'

import NavBar from './NavBar'


const DeleteCourse = () => {
    const [data,setData]=useState(
        {
            "name":""
        }
    )
    const inputHandler=()=>{
        setData({...data,[Event.target.name]:Event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
     <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Delete Title</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-info "onClick={readValue}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteCourse