import React from 'react'
import CTFbtn from './CTFbtn'

const Hero = ({description}) => {
  return (
    <section id='hero'>
      <h1 id='description'>{description}</h1>
      <CTFbtn CTF='Click Me' link='#'/>
    </section>
  )
}

export default Hero
