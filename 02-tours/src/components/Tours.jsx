import Tour from '../components/Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
        <div className='tours'>
          {tours.map((item) => {
            return <Tour key={item.id} {...item} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
