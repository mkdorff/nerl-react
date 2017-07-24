import React from 'react'
import './info-icon.css'

export default function InfoIcon(props) {
  return (
    <div className='info-icon-component'>
      <div className="outer-circle" style={{backgroundColor: `${props.color}`}}></div>
      <div className="inner-circle" style={{backgroundColor: `${props.backgroundColor}`}}></div>
      <div className="i">
        <div className="dot" style={{backgroundColor: `${props.color}`}}></div>
        <div className="line" style={{backgroundColor: `${props.color}`}}></div>
      </div>
    </div>
  )
}