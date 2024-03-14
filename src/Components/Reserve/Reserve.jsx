import React from 'react'
import styles from'./Reserve.module.css'

const Reserve = () => {
  let name =localStorage.getItem("name")
  let phone =localStorage.getItem("phone")
  let clinic =localStorage.getItem("clinic")
  let day =localStorage.getItem("day")
  return (<>
  <div className=' container bg-primary-subtle my-5 py-5'>
    <div className='w-50 mx-auto bg-white py-3 '>
      <h3 className=' text-primary fw-bold text-center'>congratulations </h3>
      <h4 className=' text-primary fw-bold text-center'>Your Appointment is :</h4>
      <h5 className=' text-center'><span className=' text-primary fw-bold '> name :</span> {name}</h5>
      <h5 className=' text-center'><span className=' text-primary fw-bold '> phone :</span> {phone}</h5>
      <h5 className=' text-center'><span className=' text-primary fw-bold '> clinic :</span> {clinic}</h5>
      <h5 className=' text-center'><span className=' text-primary fw-bold '> day :</span> {day}</h5>

    </div>

  </div>
  </>)
}

export default Reserve