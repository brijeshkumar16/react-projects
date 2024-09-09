import { useEffect, useState } from 'react';

import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const handleRemoveTour = (id) => {
    const removeTour = tours.filter((item) => item.id !== id);
    setTours(removeTour);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tour = await res.json();
      setTours(tour);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <>
      {tours.length === 0 ? (
        <main>
          <div className='title'>
            <h2 style={{ marginBottom: '2rem' }}>no tours left</h2>
            <button className='btn' onClick={() => fetchData()}>
              Refresh
            </button>
          </div>
        </main>
      ) : (
        <main>
          <Tours tours={tours} removeTour={handleRemoveTour} />
        </main>
      )}
    </>
  );
};
export default App;
