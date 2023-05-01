import React from 'react'

export const UserCircle = ({name}) => {
  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-ouryellow text-white uppercase text-3xl font-bold">
      <span>{name.charAt(0)}</span>
    </div>
  )
}