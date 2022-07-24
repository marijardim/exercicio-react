import React from 'react'

const Header = ({cor, display, lStyle, margin}) => {
  return (
    <div>
      <ul style={{display: display, backgroundColor: cor, listStyle: lStyle}}>
        <li style={{margin: margin}}><a href='/'>Home</a></li>
        <li style={{margin: margin}}><a href='/produtos'>Produtos</a></li>
      </ul>
    </div>
  )
}

export default Header
