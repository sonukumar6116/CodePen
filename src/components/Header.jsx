import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material'

function Header() {
      const logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbXvbhGBhLL63CkvCc0oDAO7jMfhYX_fqfG5rS_3L&s";
      return (
            <Container position="static">
                  <Toolbar>
                       <img src={logo} alt="logo" style={{height:60,marginLeft:"-40px"}}/>
                  </Toolbar>
            </Container>
      )
}

const Container= styled(AppBar)`
      background:#060606;
      border-bottom:1px solid grey
`
export default Header