import React , {useState} from 'react';
import NavBar from './components/NavBar';
import Hader from './components/Hader';
import ItemList from './components/ItemList';

import {Container} from 'react-bootstrap';
import Category from './components/Category';
import {items} from './Datas';

 const App = () => {
  
  const [itemData , setItemData] = useState(items);

  // get all cat uniqe
  const allCategory = ['الكل',...new Set(items.map((i) => i.category))]

  console.log(allCategory);
  
  // filter by category ,  cat => category
  const filterbyCategory = (cat) =>{
    
    if(cat === "الكل"){

    setItemData(items)

    }else{
      const newArr = items.filter((item) => item.category === cat)
      setItemData(newArr)
    }
  }

  // filter by search from 
  const filterbySearch = (word) =>{
    if(word !== ""){
      const newArr = items.filter((item) => item.title === word)
      setItemData(newArr)
    }
  }

  return (
    <div className="color-body font">
      <NavBar FilterBySearch={filterbySearch}/>

      <Container>

          <Hader/>
          
          <Category FilterByCategory={filterbyCategory} AllCategory={allCategory}/>

          <ItemList itemDatas={itemData}/>

      </Container>
    </div>
  )
}

 export default App;
