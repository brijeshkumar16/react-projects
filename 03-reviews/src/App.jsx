import { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import people from './utils/data';

const App = () => {
  const [review, setReview] = useState(0);
  const { name, job, image, text } = people[review];

  const nextPerson = () => {
    setReview(review === people.length - 1 ? 0 : review + 1);
  };

  const prevPerson = () => {
    setReview(review === 0 ? people.length - 1 : review - 1);
  };

  const randomPerson = () => {
    setReview(Math.floor(Math.random() * people.length));
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

        {/* surprise btn */}
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default App;
