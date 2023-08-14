import React from 'react';
import './StudentReviews.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const StudentReviews = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='StudentReviews_mainDiv'>
      <p className='Students_Say'>What Our Students Say</p>
      <p className='success dark'>Have a look at what our students say</p>
      <Carousel responsive={responsive}>

        {/* Review 1 */}
        <div className='StudentReviews'>
          <div className='video'>
            <iframe
              width='560'
              height='315'

              allowFullScreen
            ></iframe>
          </div>

          <div className='Writen_StudentReviews'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            optio explicabo excepturi, laudantium nesciunt perspiciatis id nemo
            praesentium eligendi labore repudiandae, corrupti et officia quas
            ratione fugiat! Rerum, alias hic.
          </div>
        </div>

        {/* Review 2 */}
        <div className='StudentReviews'>
          <div className='video'>
            <iframe
              width='560'
              height='315'
              allowFullScreen
            ></iframe>
          </div>

          <div className='Writen_StudentReviews'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            optio explicabo excepturi, laudantium nesciunt perspiciatis id nemo
            praesentium eligendi labore repudiandae, corrupti et officia quas
            ratione fugiat! Rerum, alias hic.
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default StudentReviews;
