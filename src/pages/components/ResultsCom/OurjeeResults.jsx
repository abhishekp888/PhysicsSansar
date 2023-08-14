import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './OurjeeResults.css';

const OurjeeResults = () => {
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

  // Array of student data
  const studentsData = [
    {
      name: 'Abhishek Pawar',
      imageUrl: 'https://images.news18.com/ibnlive/uploads/2021/10/mridul-1.jpg',
      course: 'IT DELHI 2025',
    },
    {
      name: 'Neeraj Kumar',
      imageUrl: 'https://static.toiimg.com/thumb/msid-85120811,width-400,resizemode-4/85120811.jpg',
      course: 'IT DELHI 2025',
    },
    {
      name: 'Prasad Lokhande',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2290026759/display_1500/stock-photo-student-is-doing-research-at-library-using-his-laptop-and-books-nerd-is-preparing-for-exams-2290026759.jpg',
      course: 'IT DELHI 2025',
    },
    {
      name: 'Gahinath Madake',
      imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2139744751/display_1500/stock-photo-student-guy-wear-glasses-studying-in-library-or-classroom-using-laptop-working-on-essay-prepare-2139744751.jpg',
      course: 'IT DELHI 2025',
    },
  ];

  return (
    <div className='OurjeeResults_main'>
      <div className='OurjeeResults_sub'>
        <p className='OurjeeResults_sub_mainpoint'>Meet Our Successful Students</p>
        <p className='OurjeeResults_sub_subpoint'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout.
        </p>
      </div>

      <div className='Carousel'>
        <p className='heading_Carousel'>JEE Result</p>
        <Carousel responsive={responsive}>
          {studentsData.map((student, index) => (
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

export default OurjeeResults;
