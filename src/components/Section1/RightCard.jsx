import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 relative overflow-hidden w-80 rounded-4xl'>

      <img src={props.img} alt="" className='h-full w-full object-cover' />
      <RightCardContent id={props.id} color={props.color} tag={props.tag}/>

    </div>
  )
}

export default RightCard
