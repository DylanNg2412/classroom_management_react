import Student from "./student";
import Title from "./title";

export default function StudentList(props) {
  const {students, setStudents} = props;
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px" }}
    >
      <div className="card-body">
        <Title title="Students" />
        {students.map((student, index) => {
          const { name, id } = student;
          return (
            <Student
              key={id} // unique
              id={id}
              name={name}
              num={index + 1}
              onDelete={(id)=> {
               //? long method
              //  const newStudents = students.filter(s => {
              //   return s.id !== id;
              //  });
              //  setStudents(newStudents);

               //! short method
                setStudents(students.filter((student)=> student.id !== id));
              }}
            />
          ); // if there is a state change it will load from the past
        })}
        {/* <Student name={students[0].name} {num=[1].num} /> //*This is a bad method */}
        {/* <Student name={"John"} num={1} />
        <Student name = {"Jane"} num={2} /> */}
      </div>
    </div>
  );
}

//* if inside an object is a string no need "{}".
