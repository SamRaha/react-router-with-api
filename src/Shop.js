import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
// useState holds the information that we're getting from the API
// useEffect runs the fetch call when the component mounts


function Shop() {

    useEffect(() => {
        fetchItems();
    },[])

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        // const data = await fetch('https://jsonplaceholder.typicode.com/users')
        // const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get')
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')

        const items = await data.json()
        console.log(items.data);
        setItems(items.data);
    }

  return (
    //   mapping through each item and assiging a link to the Id
    <div> 
      {items.map(item => (
          <h1 key={item.itemId}> <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link></h1>
      ))}
    </div>
  );
}

export default Shop;