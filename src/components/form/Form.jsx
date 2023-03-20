import { useSearchParams } from 'react-router-dom';

import css from "../form/form.module.css";

export const Form = () => {
  const [, setSearchParams] = useSearchParams();
  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ q: e.target.elements.query.value });
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <input type={'text'} name="query" className={css.formInput}/>
        <button type="submit" className={css.formBtn}>Search</button>
      </label>
      
    </form>
  );
};
