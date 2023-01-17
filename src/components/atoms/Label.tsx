import React from 'react'

function Label(props : any){

  switch(props.size){
    case "SM":
      return <div className='text-sm font-semibold text-neutral-800'>{props.text}</div>
      break;
    case "XL":
      return <div className='text-3xl font-bold text-neutral-800'>{props.text}</div>
      break;
    case "MD":
      return <div className='text-lg font-semibold text-neutral-800'>{props.text}</div>
      break;
    default:
      return <div className='text-lg font-semibold text-neutral-800'>{props.text}</div>
      break;
  }
}

export default Label;

