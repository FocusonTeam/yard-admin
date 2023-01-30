import React from 'react'

function Label(props : any){

  switch(props.size){
    case "SM":
      return <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div>
      break;
    case "XL":
      return <div className='text-2xl font-bold text-neutral-800 whitespace-pre-line'>{props.text}</div>
      break;
    case "MD":
      return <div className='text-lg font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div>
      break;
    default:
      return <div className='text-lg font-semibold text-neutral-700 whitespace-pre-line'>{props.text}</div>
      break;
  }
}

export default Label;

