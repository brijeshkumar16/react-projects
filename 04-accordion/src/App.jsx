import { useState } from 'react';

import Question from './components/Question';
import data from './utils/data';

const App = () => {
  const [question, setQuestion] = useState(data);

  return (
    <main>
      <Question question={question} />
    </main>
  );
};
export default App;
