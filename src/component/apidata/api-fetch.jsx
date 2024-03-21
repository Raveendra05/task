import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './api.css'
import Header from '../../layout/header'
const ApiFetch = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('https://child.onrender.com/api/sciencefiction')
            if (response.status === 200) {
                setData(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Header />
           
            <div className="container-fluid">
                <div className="row">
                <h3 className='heading'>Science Friction Stories</h3>
                    <div className="col-md-12 ">
                        <div className="card">
                            {
                                data.map((value) => {
                                    return (
                                        <>
                                            <div className="card-body">
                                                <img src={` https://ik.imagekit.io/dev24/${value?.Image}`} alt=""  className='rounded img'/>
                                                <div className='text-center'>
                                                <h5 className="card-title text-center">{value.Title}</h5>
                                                <button className={value.Status === "In Progress" ?  "btn btn-warning":"btn btn-primary"}>{value.Status}</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApiFetch