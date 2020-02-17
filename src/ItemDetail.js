import React, {useState, useEffect} from 'react';

// useState holds the information that we're getting from the API
// useEffect runs the fetch call when the component mounts


function ItemDetail({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    },[])

    const [item, setItem] = useState({
        images:{}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const item = await fetchItem.json()
        setItem(item);
        console.log(item);
    }

  return ( 
    //   mapping through each item and assiging a link to the itemId.
    <div> 
    <h1>{item.name}</h1>
        <img src="{item.images.transparent}" alt=""/>
    </div>
  );
}

export default ItemDetail;