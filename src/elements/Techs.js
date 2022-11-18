import React from 'react'

import {useStaticQuery, graphql} from 'gatsby';
const Techs = () => {
  const { allTechstackJson } = useStaticQuery(graphql`
  {
    allTechstackJson(limit: 10) {
      nodes {
        image {
          childImageSharp {
            fixed(width: 125, height: 125) {
              src
            }
          }
        }
      }
    }
  }
`)


 
  return (
    <div class="row col-md-12 my-3">
  
    {allTechstackJson.nodes.map((item) =>  <div  class="col-md-2 col-4 text-center">
    
    <img className='img-fluid my-3' style={{borderRadius: '50%', width:'100px', height:'100px'}} src={item.image.childImageSharp.fixed.src} alt="Avatar"/>
    </div>)}


        
       
    </div>
  )
}



export default Techs