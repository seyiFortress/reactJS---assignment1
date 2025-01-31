import React from 'react'

const CTFbtn = ({CTF, link}) => {
  return (
    <a href={link} id='ctf'>
      {CTF}
    </a>
  )
}

export default CTFbtn
