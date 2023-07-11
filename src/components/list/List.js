import Item from "../item/Item";

function List({arr}) {
   
    const items = arr.map(item =>  <Item title={item} key={item} /> );

    return (
    <div >
        {items}
    </div>
  );
}

export default List;