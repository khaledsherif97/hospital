import React from 'react'
import styles from'./News.module.css'
import img from '../../Assets/imges/Your paragraph text.png'
import { useQuery } from 'react-query'

import { DNA } from 'react-loader-spinner'
import axios from 'axios'
const News = () => {

  function getNews() {
  
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=024d5ee48b6544aeb3780784fe649c11`)
  }

  let {data,isLoading}= useQuery('news',getNews)
  console.log(data);
  return (<>
<div className=' container bg-primary-subtle my-5'>
<h2 className='py-2 text-primary fw-bold'>News : </h2>
{isLoading?  <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />:<div className="container">
    {data?.data?.articles.map ((news)=> <div className="row border-bottom"><div className="col-md-4">
    <img className='w-100 p-3' src={news.urlToImage}/>
  </div>
  <div className="col-md-8 py-4"> 
  <h4>{news.title}</h4>
  <p>{news.description}</p>
  <p>{news.author}</p>
 <a href={news.url} className='btn btn-info rounded-pill' target='block'>Source</a>
  </div></div>)}

  
</div>}

</div>
  
  </>
 
  )
}

export default News