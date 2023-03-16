import React from 'react'


interface AreaPickCellProps {
  name: string;
  domestic: boolean;
  onPress: () => void;
}

export const AreaPickCell = ({name, domestic, onPress}: AreaPickCellProps) => {
  return (
    <div className='flex p-3 justify-between border-b-1 content-center'>
      <span>{name} {domestic ? "(국내)" : "(해외)"}</span>
      <button className="bg-orange-400 pl-3 pr-3 rounded-full text-orange-50 p-1" onClick={onPress}>{"선택"}</button>
    </div>
  )
}
