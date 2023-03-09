import React from 'react'

function Label(props : any){

  switch(props.size){
    case "SM":
      return props.color? <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
        :  <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
      break;
    case "XL":
      return props.color? <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
      :  <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
      break;
    case "MD":
      return props.color? <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
        :  <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
      break;
    default:
      return props.color? <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
      :  <div className='text-sm font-semibold text-neutral-800 whitespace-pre-line'>{props.text}</div> 
      break;
  }
}

export default Label;

