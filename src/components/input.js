// import {useState} from 'react'

export default function Input(props) {
  const {value, onChange} = props;
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Add new student..."
        name="student_name"
        value={value}
        required
        //long method
        // onChange={(event) => {
        //   setValue (event.target.value);
        // }}
        //short method
        onChange = {onChange}
      />
    );
  }
  