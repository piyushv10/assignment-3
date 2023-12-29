import React from 'react'

const card = (num,desc) => {
  return (
    <div>
        <div>
            <p>
                ${num}
            </p>
            <p>
                ${desc}
            </p>
        </div>
    </div>
  )
}

export default card