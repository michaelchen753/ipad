import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
} from 'reactstrap';
import  ipadmini from '../../assets/ipadmini.jpg';
import { data } from '../../assets/data';
import './Carousel.css';
import { ReactComponent as LeftCaret } from '../../assets/left_caret.svg';
import { ReactComponent as RightCaret } from '../../assets/right_caret.svg';


const content = data[0].content;  
const Page = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(0); 
    const [nextTitle, setNextTitle] = useState(content[1].title);
    const [prevTitle, setPrevTitle] = useState(content[content.length-1].title);
    const next = () => {      
      const nextIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {     
      const nextIndex = activeIndex === 0 ? content.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
    
    useEffect(() => {
        const pTitle = activeIndex === 0 ? content[content.length -1].title : content[activeIndex-1].title
        setPrevTitle(pTitle);
        const nTitle = activeIndex === content.length -1 ? content[0].title : content[activeIndex+1].title
        setNextTitle(nTitle);
      }, [activeIndex]);

    const slides = content.map((item) => {
      return (
        <CarouselItem   
          key={item.title}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <img src={ ipadmini } className="img-fluid myimg" alt='ipad'/>
                </div>
                 <div className='col-md-8 col-sm-8'>
                    <div className='description centre'>
                      <h5 className='text-left centre ' dangerouslySetInnerHTML= {{ __html:item.description }}/>
                    </div>                    
                </div>      
            </div>                     
        </div>
        <div className="container">                           
            <ul className="pagination mypage">
              <li className='justify-content-start mypage-left'><a className='h4' href="#" onClick ={previous} ><LeftCaret /><u>{prevTitle}</u></a></li>
              <li className='justify-content-end mypage-right'><a className='h4' href="#" onClick ={next} ><u>{nextTitle}</u><RightCaret /></a></li>
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