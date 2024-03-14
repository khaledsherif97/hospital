import React from 'react'
import styles from'./Analysis.module.css'
import analysis from '../../Assets/imges/essential-medical-tests-for-men.jpg'
import { Link } from 'react-router-dom'

const Analysis = () => {
  return (<>
  <div className=' container bg-primary-subtle my-5'>
    <div className=" row">
      <div className='col-md-5'>
        <img height={'400px'} className=' w-100 p-2'  src={analysis} />
        </div>
    
    <div className='col-md-7 py-4'>
    <h3 className=' text-primary fw-bold'>Analysis :</h3>
    <div className=' lead'>
      <p>* A state-of-the-art clinical laboratory with cutting-edge equipment for comprehensive medical testing.</p>
      <p>* Advanced medical testing using the latest technology.</p>
      <p>* Expert lab services with cutting-edge equipment for precise diagnosis.</p>
      <p>* Unparalleled diagnostic capabilities with the latest lab equipment.</p>
      <p>* State-of-the-art lab facility for comprehensive medical testing.</p>
      <p>* These options all convey the message that the hospital lab is modern, well-equipped, and capable of providing high-quality diagnostic services.</p>
      
    </div>
    </div>

    </div>
    <div className='w-25 mx-auto'>
  <Link className="btn btn-primary rounded-pill my-3 py-3 px-3 " to={'/appointment'}><i className="fa-solid fa-calendar-days pe-2"></i> Book your appointment now</Link>
  </div>


  </div>
  
  </> )
}

export default Analysis