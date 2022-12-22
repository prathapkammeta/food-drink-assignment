import React from 'react';

const SearchRecipe = ({ value, isLoading, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search For Food Recipe"
        className="form-control"
      />
      <div className="input">
        <input
          disabled={isLoading || !value}
          type="submit"
          value="search"
          className="btn"
        />
      </div>
    </form>
  );
};
export default SearchRecipe;
