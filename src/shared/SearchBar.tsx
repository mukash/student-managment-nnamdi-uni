// SearchBar.js
import React from "react";
interface ISEARCHBAR {
  placeholder: string;
  onChange: (e: any) => void;
  onPressSearch: () => void;
}
const SearchBar: React.FC<ISEARCHBAR> = (props: ISEARCHBAR) => {
  const { placeholder, onChange, onPressSearch } = props;
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} onChange={onChange} />
      <button type="submit" onClick={onPressSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
