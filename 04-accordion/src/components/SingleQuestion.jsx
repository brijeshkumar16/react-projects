import { useState } from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => setIsShow(!isShow)}>
          {isShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isShow && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
