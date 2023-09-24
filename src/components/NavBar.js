import React , {useState} from 'react'
// start import bootstrap
import { Row, Navbar , Nav , Button , Container, Form } from 'react-bootstrap';
// end import bootstrap 
const NavBar = ({FilterBySearch}) => {
  const [ searchValue , setSearchValue] = useState("")
  const onSearch = ()=>{
    FilterBySearch(searchValue);
    setSearchValue("");
  }

  return (
    <Row>
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container >
        <Navbar.Brand href="#">
          <div className='brand-color'>  مطعم النور </div>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          </Nav>
          <Form className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="me-2"
              onChange={(e)=>{setSearchValue(e.target.value)}}
              value={searchValue}
            
            />
            <Button onClick={()=> onSearch("")} variant="outline-success">بحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBar;