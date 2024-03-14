import React from 'react'
import styles from'./About.module.css'

const About = () => {
  return (<>
  <div className=' container bg-primary-subtle my-5 p-5 '>
  <h2 className=' text-primary'>About Me :</h2>
  <p className=' lead'>Established in 2000, the El-Sherif Hospital has been a cornerstone of the town, providing quality healthcare to its residents.

Over the years, the hospital has seen significant growth and development. In 2010, a new wing was added, expanding the emergency department and adding new operating rooms. In 2015, the hospital opened a state-of-the-art cancer center, offering comprehensive care to patients in the region.

Today, the El-Sherif Hospital is a modern, well-equipped facility with a dedicated team of healthcare professionals. The hospital offers a wide range of services, including emergency care, surgery, maternity care, and rehabilitation.

The El-Sherif Hospital is committed to providing high-quality, compassionate care to its patients. The hospital is accredited by The Joint Commission and has been recognized for its excellence in patient care.

Looking to the future, the El-Sherif Hospital is committed to continuous improvement and innovation. The hospital is planning to expand its outpatient services and invest in new technologies to enhance patient care.

The El-Sherif Hospital is a vital part of the town and is proud to serve the needs of its residents. The hospital is committed to providing high-quality, compassionate care for generations to come.</p>

<p><i className="fa-solid fa-envelope px-2 fs-4 text-primary"></i> <span className=' fs-5 fw-bold'>Mail :</span> El-sherif-Hospital@gmail.com</p>
<p><i className="fa-brands fa-whatsapp px-2 fw-bold fs-3 text-primary"></i> <span className=' fs-5 fw-bold'>Whats App :</span> +966 5555 6666 999 // +201000111155 // +2015555666677</p>
<p><i className="fa-solid fa-phone px-2 fs-4 text-primary "></i> <span className=' fs-5 fw-bold'>Phone :</span> +966 5555 11111 9991 // +2012222555877</p>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106944.47213250637!2d39.139126160245176!3d21.376351634892966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1710276710228!5m2!1sen!2seg" className=' w-100 mt-5' height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

  </div>
    
    </> )
}

export default About