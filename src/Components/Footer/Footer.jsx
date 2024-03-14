import React from 'react'
import styles from'./Footer.module.css'

const Footer = () => {
  return (<>
  <div className=' bg-primary text-white p-5 text-center'>
    <h3 className='text-white text-center'>Contact Us</h3>
    <div className="row">
      <div className="col-md-4">
      <p><i className="fa-solid fa-envelope px-2 fs-4 text-white"></i> <span className=' fs-5 fw-bold'>Mail :</span> El-sherif-Hospital@gmail.com</p>
      </div>
      <div className="col-md-4">
      <p><i className="fa-brands fa-whatsapp px-2 fw-bold fs-3 text-white"></i> <span className=' fs-5 fw-bold'>Whats App :</span> +966 5555 6666 999 // +201000111155 // +2015555666677</p>
      </div>
      <div className="col-md-4">
      <p><i className="fa-solid fa-phone px-2 fs-4 text-white "></i> <span className=' fs-5 fw-bold'>Phone :</span> +966 5555 11111 9991 // +2012222555877</p>
      </div>
    </div>
    <p className=' text-center'>@ made by Khaled sherif</p>
  </div>
  </>
  )
}

export default Footer