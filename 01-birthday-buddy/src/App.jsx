import { useState } from 'react';

import { data } from './utils/data';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3> {people.length} birthdays today</h3>
        {people.map((item) => {
          const { id, name, age, image } = item;
          return (
            <article className='person' key={id}>
              <img src={image} alt='img' className='img' />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          );
        })}
        <button type='button' className='btn btn-block' onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};
export default App;
