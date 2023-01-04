import React from 'react'

function Label(props : any){

  if(props.size == "SM"){
    return <div className='text-sm font-semibold text-neutral-800'>{props.text}</div>
  }else if(props.size == "XL"){
    return <div className='text-xl font-bold text-neutral-800'>{props.text}</div>
  }else{
    return <div className='text-lg font-semibold text-neutral-800'>{props.text}</div>
  }

}

export default Label;

