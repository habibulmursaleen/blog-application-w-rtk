import React from "react";
import { useDispatch } from "react-redux";
import {
  filterSelected,
  sortSelected,
} from "../../features/filter/filterSlice";
import "../../styles/main.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(filterSelected(event.target.value));
  };

  const handleSortChange = (event) => {
    dispatch(sortSelected(event.target.value));
  };

  return (
    <div className="sidebar-items">
      <div className="sidebar-content">
        <h4>Sort</h4>
        <select
          name="sort"
          id="lws-sort"
          className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          onChange={handleSortChange}
        >
          <option value="">Default</option>
          <option value="newest">Newest</option>
          <option value="most_liked">Most Liked</option>
        </select>
      </div>
      <div className="sidebar-content">
        <h4>Filter</h4>
        <div className="radio-group">
          {/* handle filter on button click */}
          <div>
            <input
              type="radio"
              name="filter"
              id="lws-all"
              value="All"
              checked
              onClick={handleFilterChange}
              className="radio"
            />
            <label htmlFor="lws-all">All</label>
          </div>
          <div>
            <input
              type="radio"
              name="filter"
              id="lws-saved"
              value="Saved"
              onClick={handleFilterChange}
              className="radio"
            />
            <label htmlFor="lws-saved">Saved</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
