import { LinkOff } from '@mui/icons-material'
import React from 'react'

const BrandName = ({brand$name, link}) => {
  return (
    <div id='brand-name'>
      <a href={link}>{brand$name}</a>
    </div>
  )
}

export default BrandName
