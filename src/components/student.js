/* Props is an empty object by default */
/* destructuring */
import Button from "./button";

export default function Student(props) {
  const { num, name, id, onDelete } = props;
  return (
    <div className="d-flex justify-content-between align-items-center mt-3">
      <h5 className="mb-0">
        {num}.{name}
      </h5>
      <div>
        <Button 
        label="Delete" 
        color="danger"
        onClick= {(event) => {
          onDelete(id);
        }} />
      </div>
    </div>
  );
}
