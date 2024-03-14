import React from 'react'
import styles from'./Results.module.css'
import lab from "../../Assets/imges/lab1.jpg"
import logo from "../../Assets/imges/Your paragraph text.png"

const Results = () => {
  return (<>
  <div className=' container bg-primary-subtle my-5 p-5'>
  
   <h3 className=' text-primary'>The Result :</h3>
   <form>
   <div className='form-group mb-3'>
            <label htmlFor='search' className="mb-2">Search by receipt number:</label>
            <input  type='text' className='form-control' id="search" name="search"  />
            <div className='w-50 mx-auto py-5'>
              <img height={"700px"} className=' w-100' src={lab}/>
            </div>
            
          </div>
   </form>
  </div>
  
  </>)
}

export default Results