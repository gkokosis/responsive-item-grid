import React from "react"
import './App.css';
import Item from "./Item.js"

export default function App() {

  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    async function fetchAPI() {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos")
      const data = await res.json()
      setItems( () => {
      return data.slice(0, 20).map(item => {
        return (<Item key={item.id} title={item.title} url={item.url}  />)
      })
    })
    }

    fetchAPI()
  }, [])

  return (
    <div className="App">
      <h1 className="main-title">Display responsive grid Items</h1>
        <>
          {items}
        </>
    </div>
  );
}

