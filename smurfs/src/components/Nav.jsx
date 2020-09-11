import React, {useState} from 'react'

import {NavLink} from 'react-router-dom'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className='header'>
      <div className='container'>
        <nav className='navigation'>
          <div className='menu'>
            <div className='login--btn'>
              <NavLink to='/login'>login</NavLink>
            </div>
            <NavLink to='/'>Home</NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navigation