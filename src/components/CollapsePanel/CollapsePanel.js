import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { data } from '../../assets/data';
import Slide from '../Slide/Slide';
import './CollapsePanel.css';
import { ReactComponent as RotateCaret } from '../../assets/rotated_caret.svg';
import { ReactComponent as File } from '../../assets/file.svg';

const CollapsePanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);   

  return (
    <div className='d-block box'>      
          <a className='mynav mybg' onClick={toggle} >
              <div className=' myfont' >
                  <File />{data[0].title}                
              </div>              
              <div className={`expand_caret ${isOpen?'rotatecaret':null}`}>
                  <RotateCaret />
              </div>
          </a>    
      <Collapse isOpen={isOpen} >
        <Slide />
      </Collapse>        
    </div>
  );
}

export default CollapsePanel;