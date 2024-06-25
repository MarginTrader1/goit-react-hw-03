import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ search }) => {
  const handleChange = (evt) => {
    search(evt.target.value);
  };

  const id = useId();

  return (
    <div className={css.input}>
      <label htmlFor={`search-${id}`}>Find contacts by name</label>
      <input type="text" id={`search-${id}`} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
