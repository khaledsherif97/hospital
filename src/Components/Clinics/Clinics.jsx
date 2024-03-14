import React from 'react'
import styles from'./Clinics.module.css'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'


const Clinics = () => {
const columns =[
  {
    name:"Days",
    selector: row => row.days
  },
  {
    name:" OB/GYN ",
    selector: row => row.gyn
  },
  {
    name:"Pediatrics ",
    selector: row => row.pediatrics 
  },
  {
    name:"Orthopedics ",
    selector: row => row.orthopedics 
  },
  {
    name:"Dermatology ",
    selector: row => row.dermatology 
  },
  {
    name:"Thoracic Surgery ",
    selector: row => row.surgery 
  },
  {
    name:"Oncology ",
    selector: row => row.oncology 
  },
]
const data =[
  {
    id: 1,
    days:"Saturday" ,
    gyn:"Dr/Mohamed Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr/Karim Hossam",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Ahmed",

  },
  {
    id: 2,
    days:"Sunday" ,
    gyn:"Dr/Hussam Said",
    pediatrics:"Dr/Sherif Essam",
    orthopedics:"Dr/Karim Khaled",
    dermatology:"Dr/Islam Omer",
    surgery:"Dr/Ahmed Amer",
    oncology: "Dr/Omer Ahmed",

  },
  {
    id: 3,
    days:"Monday" ,
    gyn:"Dr/Khaled Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr/Abas Hossam",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Ahmed Khaled",

  },
  {
    id: 4,
    days:"Tuesday" ,
    gyn:"Dr/Mohamed Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr/Karim Hossam",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Ahmed",

  },
  {
    id: 5,
    days:"Wednesday" ,
    gyn:"Dr/Mohamed Said",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr/Hossam Omran",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Amal Hassaan",
    oncology: "Dr/Norhan Ahmed",

  },
  {
    id: 6,
    days:"Thursday" ,
    gyn:"Dr/Khaled Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr/Fady badr",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Ahmed",

  },
]
const columnss =[
  {
    name:"Days",
    selector: row => row.days
  },
  {
    name:" OB/GYN ",
    selector: row => row.gyn
  },
  {
    name:"Pediatrics ",
    selector: row => row.pediatrics 
  },
  {
    name:"Orthopedics ",
    selector: row => row.orthopedics 
  },
  {
    name:"Dermatology ",
    selector: row => row.dermatology 
  },
  {
    name:"Thoracic Surgery ",
    selector: row => row.surgery 
  },
  {
    name:"Oncology ",
    selector: row => row.oncology 
  },
]
const dataa =[
  {
    id: 1,
    days:"Thursday" ,
    gyn:"Dr/Khaled Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr/Fady badr",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Ahmed",

  },
  {
    id: 2,
    days:"Sunday" ,
    gyn:"Dr/Mohamed Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr*Karim Hossam",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Ahmed",

  },
  {
    id: 3,
    days:"Tuesday" ,
    gyn:"Dr/Mohamed Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr/Karim Hossam",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Ahmed",

  },
  {
    id: 4,
    days:"Sunday" ,
    gyn:"Dr/Hussam Said",
    pediatrics:"Dr/Sherif Essam",
    orthopedics:"Dr/Karim Khaled",
    dermatology:"Dr/Islam Omer",
    surgery:"Dr/Ahmed Amer",
    oncology: "Dr/Omer Ahmed",

  },
  {
    id: 5,
    days:"Wednesday" ,
    gyn:"Dr/Mohamed Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr*Karim Hossam",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Ahmed",

  },
  {
    id: 6,
    days:"Thursday" ,
    gyn:"Dr/Mohamed Saad",
    pediatrics:"Dr/Ahmed Sherif",
    orthopedics:"Dr*Karim Hossam",
    dermatology:"Dr/Islam Mohamed",
    surgery:"Dr/Ahmed Hassaan",
    oncology: "Dr/Khaled Abas",

  },
]

  return (<>
  <h2 className=' text-primary my-3 fw-bold ps-5'>Clinic schedule :</h2>
  <div className='container bg-primary-subtle my-5 pb-3'>
    <h3 className=' text-primary  fw-bold py-3'>Morning Shift (8 AM - 1 PM)</h3>
    <DataTable
    className='py-2'
    columns={columns}
    data={data}
     ></DataTable>
      <h3 className=' text-primary fw-bold py-3'>Evening Shift (3 PM - 8 PM)</h3>
      <DataTable
    className='py-2'
    columns={columnss}
    data={dataa}
     ></DataTable>
     
     <div className='w-100 mx-auto'>
  <Link className="btn btn-primary rounded-pill my-3 py-3 px-3 " to={'/appointment'}><i className="fa-solid fa-calendar-days pe-2"></i> Book your appointment now</Link>
  </div>
  </div>
  
  
  
  </>)
}

export default Clinics