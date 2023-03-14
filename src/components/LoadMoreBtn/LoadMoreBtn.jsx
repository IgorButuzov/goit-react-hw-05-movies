

import style from '../LoadMoreBtn/LoadMoreBtn.module.css'

const LoadMoreBtn = ({pageNum}) => {
  // eslint-disable-next-line
  
    return (
        <div >
          <button className={style.loadMoreBtn} onClick={() => pageNum(value => value + 1)}>
          Load More
          </button>
        </div>
      );
}

export default LoadMoreBtn;

