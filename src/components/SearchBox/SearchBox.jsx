import css from "./SearchBox.module.css";
import { useId } from "react";

const SearchBox = ({ search }) => {
  const handleChange = (evt) => {
    search(evt.target.value);
  };

  const searchFieldId = useId();

  return (
    <div className={css.input}>
      <label htmlFor={searchFieldId}>Find contacts by name</label>
      <input type="text" id={searchFieldId} onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
