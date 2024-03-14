import React from 'react'
import styles from'./Appointment.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

const Appointment = () => {
  let navigate =useNavigate()
   function Appointment(values) {
    console.log(values);
    localStorage.setItem('name',values.name)
    localStorage.setItem('phone',values.phone)
    localStorage.setItem('clinic',values.clinic)
    localStorage.setItem('day',values.day)
    localStorage.setItem('shift',values.shift)
    navigate("/reserve")
  }
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required('Required'),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Invalid Phone number").required("Required"),

  });

  let formik =useFormik({
    initialValues :{
      "name": "",
      "phone": "",
      "shift": "",
      "clinic":"",
      "day":""
      },
      validationSchema : validationSchema,
      onSubmit:Appointment,
    
  })
 
  return (<>
    <div className='container'>
      <div className='mx-auto my-5 bg-primary-subtle p-5'>
        <h3 className=' text-primary pb-4'> Book your appointment now : </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className='form-group mb-3'>
            <label htmlFor='name' className="mb-2">Enter Your Name :</label>
            <input  type='text' className='form-control' id="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.name && formik.touched.name? <div className='alert alert-danger py-0'>{formik.errors.name}</div>:null}
          </div>
          <div className='form-group mb-3'>
            <label htmlFor='phone' className="mb-2">Enter Your Phone Number :</label>
            <input type='tel' className='form-control' id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.phone && formik.touched.phone? <div className='alert alert-danger py-0'>{formik.errors.phone}</div>:null}
          </div>

          <div  className="form-group mb-4">
           <label htmlFor="shift" className="mb-2">Choose Shift :</label>
             <div className="form-check ms-2" id="shift">
               <label className="form-check-label mb-1">
            <input type="radio" className="form-check-input" name="shift"  value={formik.values.shift} onChange={formik.handleChange} onBlur={formik.handleBlur} checked/>
                 Morning Shift
             </label>
            </div>
               <div className="form-check ms-2">
                <label className="form-check-label mb-1">
                  <input type="radio" className="form-check-input" name="shift"  value={formik.values.shift} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                     Evening Shift
                 </label>
               </div>
          </div>

          <div className='form-group mb-3'>
          <label htmlFor='clinic' className="mb-2">Choose Clinic :</label>
          <select id="clinic" className="form-control" name="clinic"   value={formik.values.clinic}  onChange={formik.handleChange} onBlur={formik.handleBlur}>
                        <option >Open The List </option>
                        <option >Analysis</option>
                        <option >Radiology</option>
                        <option >OB/GYN</option>
                        <option >Pediatrics</option>
                        <option >Orthopedics</option>
                        <option >Dermatology</option>
                        <option >Thoracic Surgery</option>
                        <option >Oncology</option>
          </select>

          </div>
          <div className='form-group mb-3'>
          <label htmlFor='day' className="mb-2">Choose Day :</label>
          <select id="day" className="form-control" name="day"   value={formik.values.day}  onChange={formik.handleChange} onBlur={formik.handleBlur}>
                    <option >Open The List </option>
                        <option >Saturday</option>
                        <option >Sunday </option>
                        <option >Monday </option>
                        <option >Tuesday </option>
                        <option >Wednesday </option>
                        <option >Thursday </option>
                        
          </select>

          </div>
          
          <div>
         
          <button disabled={!(formik.isValid && formik.dirty)} type="submit" className='btn btn-primary rounded-pill text-white w-100 my-3 py-2'>Book Now :</button>
         
          </div>
         
        </form>
      </div>
  
    </div>
    </>)
}

export default Appointment