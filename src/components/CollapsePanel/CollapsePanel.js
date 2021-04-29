import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { data } from '../data.js';
import Page from '../Carousel/Carousel';
import './CollapsePanel.css';

const CollapsePanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  console.log('toggle',toggle);
  console.log('isopen',isOpen);

  const rotateCaret = isOpen === true? 'rotatecaret' : null;

console.log('rotatecaret',rotateCaret)
  return (
    <div className='d-block container box'>      
          <a className='mynav mybg' onClick={toggle} data-toggle="collapse" data-target="#collapseExampleArea" href="#collapseExampleArea" aria-expanded="false" >
              <div className=' myfont' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="bi bi-file-earmark" viewBox="0 0 16 16">
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                  </svg>{data[0].title}                
              </div>              
              <div className={`expand_caret ${rotateCaret}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
              </div>
          </a>    
      <Collapse isOpen={isOpen} >
        <Page content={ data[0].content } />
      </Collapse>        
    </div>
  );
}

export default CollapsePanel;