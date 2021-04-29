import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
} from 'reactstrap';
import  ipadmini from '../ipadmini.jpg';
import { data } from '../data';
import './Carousel.css';

const content = data[0].content;  

const Page = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(1);
  
    const next = () => {      
      const nextIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {     
      const nextIndex = activeIndex === 0 ? content.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    } 
   

    const slides = content.map((item, i) => {
      return (
        <CarouselItem   
          key={item.title}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <img src={ ipadmini } className="img-fluid myimg" alt='ipad'/>
                </div>
                 <div className='col-md-8 col-sm-8'>
                    <div className='description d-flex align-middle'>
                      <h5 className='text-left  ' dangerouslySetInnerHTML= {{ __html:item.description }}/>
                    </div>                    
                </div>      
            </div>                     
        </div>
        <div className="container">                           
            <ul className="pagination mypage">
              <li className='justify-content-start mypage-left'><a className='h4' href="#" onClick ={previous} ><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                      <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg><u>Prev</u></a></li>
              <li className='justify-content-end mypage-right'><a className='h4' href="#" onClick ={next} ><u>{ item.title }</u><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg></a></li>
            </ul>
          </div>                             
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        interval= {false}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >{slides}       
      </Carousel>      
    );
  }  
  export default Page;