import { useState } from 'react';

import TrendMovies from './TrendMovies/TrendMovies'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'

export const App = () => {
  const [pageNum, setPageNum] = useState(1);

  return (
    <div>
      <TrendMovies page={pageNum}/>
      <LoadMoreBtn pageNum={setPageNum}/>
    </div>
  );
};
