import React from 'react'

const card = (props) => {
  return (
    <div>
        
       
        <div>
            
            <p>
                {props.num}
            </p>
            <p>
                {props.desc}
            </p>
        </div>
    </div>
  )
}

export default card