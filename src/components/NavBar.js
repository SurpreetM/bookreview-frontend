//Functional Component (7)

import React from 'react'
import {Link} from 'react-router-dom'
 

const NavBar = () => {

  return (
    <div>
      <Link className="button" to='/books'> All Books  </Link>  
      <Link className="button" to='/books/new' > Add a New Book </Link>
    </div>

  )
}

export default NavBar