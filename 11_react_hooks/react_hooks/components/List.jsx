import { useEffect, useState } from "react";

const List = ({getItems}) => {
  const [myItems, setMyItems] = useState([])

  useEffect(() => {
    console.log("Buscando itens do DB...")
    setMyItems(getItems)
    console.log(myItems)
  }, [getItems])


  return ( 
    <div>
      {myItems &&
        myItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
    </div>
   );
}
 
export default List;