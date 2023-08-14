import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './OurjeeResults.css';

const ourNeetResult = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Array of NEET student data
  const neetStudentsData = [
    {
      name: 'Abhishek Pawar',
      imageUrl: 'https://s35691.pcdn.co/wp-content/uploads/2016/09/iStock_87294393_LARGE.160928.jpg',
      course: 'IT DELHI 2025',
    },
    {
      name: 'Neeraj Kumar',
      imageUrl: 'https://www.oxfordlearning.com/wp-content/uploads/2018/02/student-studying-in-library.jpeg',
      course: 'IT DELHI 2025',
    },
    {
      name: 'Prasad Lokhande',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/38/46/85/1000_F_238468511_Jrnp7Om07j5onEsbWtsUvTI2di851DNA.jpg',
      course: 'IT DELHI 2025',
    },
    {
      name: 'Gahinath Madake',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2139744751/display_1500/stock-photo-student-guy-wear-glasses-studying-in-library-or-classroom-using-laptop-working-on-essay-prepare-2139744751.jpg',
      course: 'IT DELHI 2025',
    },
  ];

  return (
    <div>
      <div className='Carousel'>
        <p className='heading_Carousel'>NEET Result</p>
        <Carousel responsive={responsive}>
          {neetStudentsData.map((student, index) => (
            <div className='card' key={index}>
              <img src={student.imageUrl} alt='Avatar' style={{ width: '100%' }} />
              <div className='container'>
                <h4>
                  <b>{student.name}</b>
                </h4>
                <p>{student.course}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ourNeetResult;
