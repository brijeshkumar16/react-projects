import { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './data';

const Alternative = () => {
  const [review, setReview] = useState(0);
  const { name, job, image, text } = people[review];

  //   console.log(1 % 4); -> 1
  //   console.log(2 % 4); -> 2
  //   console.log(3 % 4); -> 3
  //   console.log(4 % 4); -> 0

  const nextPerson = () => {
    setReview((currentIndex) => {
      let newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setReview((currentIndex) => {
      let newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === review) {
      randomNumber = review + 1;
    }

    const newIndex = randomNumber % people.length;
    setReview(newIndex);
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default Alternative;
