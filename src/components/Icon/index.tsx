import React from 'react'
import './icon.css';
interface Props {
  path: string
}
const Icon = ({path}: Props) => {
  return (
    <img className='icon-image' src={path} alt='path logo' />
  )
}

export const resolveIcon = (path: string) => {
  return <Icon path={path}/>
}

export default Icon