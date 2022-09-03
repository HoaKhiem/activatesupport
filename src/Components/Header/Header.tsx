import React from 'react'
import './Header.css'
const Header : React.FC = () => {
  return (
    <header className='p-2 flex justify-start border-b-2 font-bold'>
        <div className="header-logo">
            <span>Support Activate</span>
        </div>
    </header>
  )
}

export default Header