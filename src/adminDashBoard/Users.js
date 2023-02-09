import React from 'react'

export default function Users({a}) {
  return (
    <div id='customer'>
        <h1>{a.id}</h1>
        <h1>{a.date}</h1>
        <h1>{a.users.name}</h1>
    </div>
  )
}
   