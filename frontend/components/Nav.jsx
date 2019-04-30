import React from 'react'

import Link from './Link'
import StyledNav from './styles/StyledNav'

function Nav () {
  return (
    <StyledNav>
      <Link prefetch href='/signup' activeClassName='active'>
        Join Free
      </Link>
    </StyledNav>
  )
}

export default Nav
