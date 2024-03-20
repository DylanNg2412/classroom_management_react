import { useState } from "react";

import Form from "./components/form";
import StudentList from "./components/student_list";

export default function App() {
  const [students, setStudents] = useState([]);
  return (
    <div>
      <div className="container">
        <Form students={students} setStudents={setStudents} />
        <StudentList students={students} setStudents={setStudents} />
      </div>
    </div>
  );
}
