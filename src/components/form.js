import {useState} from 'react'

import Input from "./input";
import Button from "./button";
import Title from "./title";

//! if there's more than one component like <Input /> and <Button />, they should be wrapped in a div.
export default function Form(props) {
  const {students, setStudents} = props;
  const [value, setValue] = useState("");
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px" }}
    >
      <div className="card-body">
        <Title />
        <form
        onSubmit={(event) => {
          event.preventDefault();
          setStudents([
            ...students, 
            {
              id: Math.random(), // to ensure unique id
              name: value,
            },
          ]);
          setValue("");
        }}>
          <div className="mt-4 d-flex justify-content-between align-items-center">
            <Input
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <Button label="Add"/>
          </div>
        </form>
      </div>
    </div>
  );
}
