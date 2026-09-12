import React from 'react'

const RightCardContent = (props) => {
  return (

      <div className='h-full w-full absolute top-0 left-0  p-10 flex flex-col justify-between'>
        <h2 className='bg-white text-xl rounded-full font-semibold h-12 w-12 flex justify-center items-center'>
            {props.id+1}
        </h2>
        <div>
            <p className='text-shadow-2xs text-white text-xl mb-14 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad qui quia praesentium modi eos ab.</p>
            <div>
                <button style={{backgroundColor:props.color}} className='font-medium rounded-full px-5 py-1 text-white'>
                    {props.tag}
                </button>
                <button style={{backgroundColor:props.color}} className='font-medium rounded-full px-3 py-1 text-white'> → 
                </button>
            </div>
        </div>
       </div>
    
  )
}

export default RightCardContent
