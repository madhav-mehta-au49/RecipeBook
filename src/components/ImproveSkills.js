import React from 'react'

function ImproveSkills() {
    const list = [
        " Equip yourself with the right tools",
        " Get to know your ingredients",
        " Learn basic cooking techniques",
        " Practice, practice, practice!"
    ]
  return (
      <div className='section improve-skills'>
          <div className='col img'>
            <img src='/img/gallery/img_10.jpg' alt='' />
          </div>
          <div className='col typography'>
              <h1 className='title'>Improve Your cuisine Skills</h1>
              {list.map((item,index) =>(
                <p className='skill-item' key={index}>{item}</p>
              ))}

              
          </div>
      </div>
  )
}

export default ImproveSkills
