import React from 'react'
import {Row,Col,Card, CardImg} from 'react-bootstrap'
const ItemList = ({itemDatas}) => { // props {itemData}
  return (
    <Row>
            {
                itemDatas.length >= 1 ? (
                    itemDatas.map((item) => {
                        return(
                        <Col key={item.id} sm="12" className='mb-3'>
                            <Card  style={{backgroundColor:"#f8f8f8" , display:'flex', flexDirection:'row' , justifyContent:'space-between'}}>
                                <img className='img-item' src={item.imgUrl}/>
                                <Card.Body >
                                    <Card.Title className='d-flex justify-content-between'>
                                        <div className='item-title'>{item.title}</div>
                                        <div className='item-price'>{item.price}</div>
                    
                                    </Card.Title>
                                    <Card.Text className='py-3'>
                                        <div className='item-description'>{item.description}</div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })
                ) : <h3 className="text-center">لا يوجد هذا الصنف</h3>
            }
    </Row>
  )
}

export default ItemList;