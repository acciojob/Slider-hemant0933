import "./App.css";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

  return (
    <div className="App">
      <div>
         <h1 id="review-heading">Reviews</h1>
      <Carousel 
      showArrows={true}
      width="700px"
      infiniteLoop
      swipeable={true}
        key={Math.random(100)*3}>
        {
            data.map((val,index)=>(
               <div id='review-container' key={val.id} className="card">
                <div className="textInfo">
                  <p id={'person-'+index}>
                    Name :  {val.name}
                  </p>
                  <p id={'title-'+index} style={{fontSize:'20px'}}>Title : {val.title}</p>
                  <p>"<i>{val.quote}</i>"</p>
                </div>
                <div className="imgInfo">
                  <img src={val.image} height={600} alt='personImg'/>
                </div>
               </div>
            ))
        }
      </Carousel>
    </div>
    </div>
  );
}

export default App;
