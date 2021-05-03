import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { data } from '../../assets/data';
import Page from '../Carousel/Carousel';
import './CollapsePanel.css';
import { ReactComponent as RotateCaret } from '../../assets/rotated_caret.svg';
import { ReactComponent as File } from '../../assets/file.svg';

const CollapsePanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen); 
  console.log('isopen',isOpen); 

  return (
    <div className='d-block container box'>      
          <a className='mynav mybg' onClick={toggle} data-toggle="collapse" data-target="#collapseExampleArea" href="#collapseExampleArea" aria-expanded="false" >
              <div className=' myfont' >
                  <File />{data[0].title}                
              </div>              
              <div className={`expand_caret ${isOpen?'rotatecaret':null}`}>
                  <RotateCaret/ >
              </div>
          </a>    
      <Collapse isOpen={isOpen} >
        <Page content={ data[0].content } />
      </Collapse>        
    </div>
  );
}

export default CollapsePanel;