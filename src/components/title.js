export default function Title(props) {
    const { title = "My Classroom"} = props;
    return <h1 className="card-title mb-3">{title}</h1>;
} 