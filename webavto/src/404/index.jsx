import React from 'react'
import { ImageNotFound } from './style'
import ImageNF from "../assets/nfound.png"

const NotFound = () => {
  return (
   <ImageNotFound src={ImageNF} alt='Sorry The HTTP 404 Not Found' />
  )
}

export default NotFound