
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemList from "../ItemList/ItemList";
import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({greetings})=>{  

    return(
        <div className='contenedor-itemList'>
            <img src="https://i.ibb.co/KxcCC11/Coder-sport.png" className="img-itemContainer"/>
            <h2 className='item'>{greetings}</h2> 
            <ItemList/>
            <ItemDetailContainer id={4}/>
        </div>
    )
}

export default ItemListContainer;
