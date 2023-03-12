

import style from '../LoadMoreBtn/LoadMoreBtn.module.css'
const onBtnClick = () =>{
    
}
const LoadMoreBtn = () => {
    return (
        <div >
          <button className={style.loadMoreBtn} onClick={onBtnClick}>
          Load More
          </button>
        </div>
      );
}

export default LoadMoreBtn;

