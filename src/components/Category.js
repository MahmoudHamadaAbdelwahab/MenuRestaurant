import React from 'react'
import {Row,Col} from 'react-bootstrap'

 const Category = ({FilterByCategory , AllCategory}) => {
  // to filter by category 
  const onFilter = (cat) => {
    FilterByCategory(cat)
  }
  return (
    <Row className="my-2 mb-5">
        <Col sm="12" className='d-flex justify-content-center '>

          {
              AllCategory.length >= 1 ? (AllCategory.map((cat) => {
                return (
                  <div >
                    <button  onClick={()=> onFilter(cat)} style={{border:"1px solid red"}} className='btn mx-2'> {cat} </button>
                  </div>
                )
              })) : <h1>لا يوجد هذا التصنيف </h1>
            }
  
        </Col>
    </Row>
  )
}

export default Category;