import BasicExample from './Card';
import {Col,Container,Row} from 'react-bootstrap'
import gambar1 from './../assets/fisika.jpeg'
import gambar2 from './../assets/informatika.jpeg'
import gambar3 from './../assets/kimia.jpeg'
import gambar4 from './../assets/matematika.jpg'
import Header from './Header';


function AutoLayoutExample() {
  return (
    <div >
      <Header/>
      <h1>mendeploy react</h1>
      
    <Container className='text-center mt-2' >
      <Row>
        <Col md="6" lg='3' sm='12' xs='12' className='mb-5 mt-5' >
            <div className='img-fluid'> <BasicExample gambar={gambar1}/> </div>
        </Col>
        <Col md="6" lg='3' sm='12' xs='12' className='mb-5 mt-5' >
            <div className='img-fluid'> <BasicExample gambar={gambar2}/> </div>
        </Col>
        <Col md="6" lg='3' sm='12' xs='12' className='mb-5 mt-5' >
            <div className='img-fluid'> <BasicExample gambar={gambar3}/> </div>
        </Col>
        <Col md="6" lg='3' sm='12' xs='12' className='mb-5 mt-5' >
            <div className='img-fluid'> <BasicExample gambar={gambar4}/> </div>
        </Col>
      </Row>
    </Container>
    </div>
  
  );
}

export default AutoLayoutExample;