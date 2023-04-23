import React from "react";
import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter)
  
  const handleFilterChenge = (e) => {
    const value = e.target.value;
    dispatch(filterContacts(value));
  }
  return (
    <label>
      Find contacts by name
      <input type="text" value={filterValue} onChange={handleFilterChenge} />
    </label>
  );
};


Filter.protoType = {
  value: PropTypes.string.isRequired,
  changeFilter:PropTypes.func.isRequired,
}