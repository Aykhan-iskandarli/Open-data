import React from 'react'
import { IProgress } from './types/progress'
import './progress.component.scss'

const ProgressComponent = (props:IProgress) => {
  return (
    <div className="progress-bar">
    <span>{props.text}</span>
    <div className="progress-out">
        <div className={`progress-in ${props.className}`} style={{width:props.width}}></div>
    </div>
  </div>
  )
}

export default ProgressComponent