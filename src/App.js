import Container from 'react-bootstrap/Container';
import Header from './Components/Header';
import MyCard from './Components/MyCard';
import Footer from './Components/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css';


import ave_del_paraiso from './img/ave_del_paraiso.jpg'
import calendulas from './img/calendulas.jpg'
import camelias from './img/camelias.jpg'
import crisantemos from './img/crisantemos.jpg'
import dalias from './img/dalias.jpg'
import flor_de_loto from './img/flor_de_loto.jpg'
import girasoles from './img/girasoles.jpg'
import rosas from './img/rosas.jpg'


function App() {
  return (
    <div>      
      <div className="divHeader text-center">
        <Header 
          title="Galería de Imágenes con React" 
        />
      </div>

      
      <Container>
        <div>
          <Row>
            <Col>
              <MyCard
                imgMyCard={ave_del_paraiso}
                title="Ave del Paraíso"
                description="De origen sudafricano, el Ave del Paraís..."        
              />
            </Col>
            <Col>
              <MyCard
                imgMyCard={calendulas}
                title="Caléndulas"
                description="La caléndula es también conocida como Ma..."
              />
            </Col>
            <Col>
              <MyCard
                imgMyCard={camelias}
                title="Camelias"
                description="La Camelia llegó a Europa hace más de 4..."
              />
            </Col>
            <Col>
              <MyCard
                imgMyCard={crisantemos}
                title="Crisantemos"
                description="El crisantemo es una flor originaria de..."
              />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col>
              <MyCard
                imgMyCard={dalias}
                title="Dalias"
                description="Originarias de México, se suele decir qu..."        
              />
            </Col>
            <Col>
              <MyCard
                imgMyCard={flor_de_loto}
                title="Flor de Loto"
                description="Es una de las flores más populares en to..."
              />
            </Col>
            <Col>
              <MyCard
                imgMyCard={girasoles}
                title="Girasoles"
                description="Los girasoles son plantas herbáceas de l..."
              />
            </Col>
            <Col>
              <MyCard
                imgMyCard={rosas}
                title="Rosas"
                description="Originarias de Asia, las rosas crecen en..."
              />
            </Col>
          </Row>
        </div>
      </Container>      
      <div className="divFooter text-center">
        <Footer />
      </div>
    </div>
  );
}




export default App;
