import gameOfThrones from "./gameOfThrones";
import { Link, useParams } from "react-router-dom";

export default function House() {
  const { id } = useParams();
  const house = gameOfThrones.find((house) => house.id === parseInt(id));

  return (
    <div className="page">
      <div className="header">
        <h2>Members of GOT House</h2>
      </div>
      <ul className="list">
        {house.people.map((person) => (
          <li key={person.id}>
            <Link to={`/houses/${house.id}/members/${person.id}`}>
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
