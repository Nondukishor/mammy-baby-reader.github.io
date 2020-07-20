import React, { Fragment,useState } from 'react';
import { Container,Row,Col, Card } from 'react-bootstrap';
import style from './style.module.scss';
import { useSpeechSynthesis } from 'react-speech-kit';
import ReadModal from './Modal';

function App() {
  const [show,setShow] = useState(false)
  const [state] = useState(()=>[
    {name:'A', color:'#FFE47A', backgroundColor:'#1CD8D2'},
    {name:'B', color:'#FFE47A', backgroundColor:'#5C258D'},
    {name:'c', color:'#FFE47A', backgroundColor:'#71B280'},
    {name:'D', color:'#FFE47A', backgroundColor:'#134E5E'},
    {name:'E', color:'#FFE47A', backgroundColor:'#EAECC6'},
    {name:'F', color:'#FFE47A', backgroundColor:'#85D8CE'},
    {name:'G', color:'#FFE47A', backgroundColor:'#4776E6'},
    {name:'H', color:'#FFE47A', backgroundColor:'#8E54E9'},
    {name:'I', color:'#FFE47A', backgroundColor:'#516395'},
    {name:'J', color:'#FFE47A', backgroundColor:'#614385'},
    {name:'K', color:'#FFE47A', backgroundColor:'#1F1C2C'},
    {name:'M', color:'#FFE47A', backgroundColor:'#16222A'},
    {name:'N', color:'#FFE47A', backgroundColor:'#EB3349'},
    {name:'O', color:'#FFE47A', backgroundColor:'#DD5E89'},
    {name:'P', color:'#FFE47A', backgroundColor:'#F7BB97'},
    {name:'Q', color:'#FFE47A', backgroundColor:'#3CD3AD'},
    {name:'R', color:'#FFE47A', backgroundColor:'#4CB8C4'},
    {name:'S', color:'#FFE47A', backgroundColor:'#1D2B64'},
    {name:'T', color:'#FFE47A', backgroundColor:'#FF512F'},
    {name:'U', color:'#FFE47A', backgroundColor:'#61045F'},
    {name:'V', color:'#FFE47A', backgroundColor:'#DD2476'},
    {name:'W', color:'#FFE47A', backgroundColor:'#1a2a6c'},
    {name:'X', color:'#FFE47A', backgroundColor:'#b21f1f'},
    {name:'Y', color:'#FFE47A', backgroundColor:'#22c1c3'},
    {name:'Z', color:'#FFE47A', backgroundColor:'#ff9966'},
  ])

  const { speak } = useSpeechSynthesis();
  const [alphabet,setAlphabet]= useState('')

  const handleRead =(e)=>{
    speak({text:e.target.value})
    setAlphabet(e.target.value)
    setShow(true)
  }
  
  return (
   <Fragment>
     <Container fluid={true}>
       <Row>
         <Col>
         <div className="mt-5 pt-5 h1 text-center jumbotron bg-warning d-block" style={{fontWeight:'bold'}}>
             Mummy's Baby Reader
         <div>
           <img src={'https://media.giphy.com/media/eFAFV2ytLzBba/giphy.gif'} alt="cover" height="300" width="300"/>
         </div>
       </div>
         </Col>
       </Row>
        
       <Row>
      
          {
            state.map((a,index)=>{
              return(
                <Col key={index} xl={2} md={2} sm={2} className="p-2">
                  <Card style={{color:a.color,backgroundColor:a.backgroundColor}}>
                  <div  className={style.Alphabet}>{a.name}</div>
                  <button  value={a.name} onClick={handleRead} className="btn btn-sm btn-success btn-block">Read Me</button>
                  </Card>
               </Col>
              )
            })
          }

          <ReadModal 
          onHide={() => setShow(false)}
          show={show} 
          alphabet={alphabet}
          />
       </Row>
     </Container>
   </Fragment>
  );
}

export default App;
