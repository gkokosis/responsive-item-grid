import React from "react"

export default function Item(props) {
  return (
    <div className="item">
      <h2 className="item-title">{props.title}</h2>
      <img className="image" src={props.url} alt={props.title} />
    </div>
  )
}