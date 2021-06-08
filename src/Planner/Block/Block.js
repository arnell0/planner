import React from 'react'
import Update from './Update'
import Read from './Read'

export default function Block(props) {

  return (
    <div>
      {props.item.done ? 
      <Read {...props}>
        <BlockInner {...props} />
      </Read>
      :
      <Update {...props}>
        <BlockInner {...props} />
      </Update>}
    </div>
  )
}

function BlockInner(props) {
  const prio = [
    "5px solid royalblue",
    "5px solid goldenrod",
    "5px solid orangered",
  ]

  return (
    <div style={{textAlign:"right", padding: "5px"}}>
      <div style={{width:"100%", borderTop: prio[props.item.prio]}}></div>
      
      <div style={{ textAlign:"left", padding: "10px", background:"whitesmoke", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around" }}>
        
        <h3>{props.item.title}</h3>
        {props.full && props.item.content}

      </div>
      {props.item.author}
    </div>
  )
}
