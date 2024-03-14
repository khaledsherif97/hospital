import React from 'react'
import styles from'./Radiolodgy.module.css'
import radio from '../../Assets/imges/14.jpg'
import radioo from '../../Assets/imges/main-qimg-58583d02165a1536a457214574aabaa2-lq.jpg'
import { Link } from 'react-router-dom'

const Radiolodgy = () => {
  return (<>
    <div className=' container bg-primary-subtle my-5'>
      <div className=" row">
        <div className='col-md-5'>
          <img height={'400px'} className=' w-100 p-2'  src={radio} />
          <img height={'400px'} className=' w-100 p-2'  src={radioo} />
          </div>
      
      <div className='col-md-7 py-4'>
      <h3 className=' text-primary fw-bold'>Radiology :</h3>
      <div className=' lead'>
        <p>* A state-of-the-art imaging department with cutting-edge technology for comprehensive diagnostic imaging.</p>
        <p>* Imaging departments in modern hospitals utilize advanced technology to produce detailed images of the human body for diagnostic and treatment purposes. These departments are equipped with a variety of imaging modalities, including:</p>
        <p>* X-ray: X-rays produce radiographs that visualize bones, teeth, and other dense structures.</p>
        <p>* Ultrasound: Ultrasound uses sound waves to generate images of soft tissues, such as organs, muscles, and blood vessels.</p>
        <p>* Computed tomography (CT): CT scans provide cross-sectional images of the body, offering more detailed views than X-rays.</p>
        <p>* Magnetic resonance imaging (MRI): MRIs use strong magnetic fields and radio waves to produce detailed images of organs, tissues, and bones without exposing patients to radiation.</p>
        <p>* PET-CT scanners: PET-CT combines functional imaging (PET) with anatomical imaging (CT) to identify metabolic processes within the body.</p>
        <p>* Radiology departments, equipped with cutting-edge imaging technology, play a crucial role in diagnosing a wide range of medical conditions, guiding treatment decisions, and monitoring treatment outcomes.</p>
      </div>
      </div>
  
      </div>
      <div className='w-25 mx-auto'>
    <Link className="btn btn-primary rounded-pill my-3 py-3 px-3 " to={'/appointment'}><i className="fa-solid fa-calendar-days pe-2"></i> Book your appointment now</Link>
    </div>
  
  
    </div>
    
    </> )
}

export default Radiolodgy