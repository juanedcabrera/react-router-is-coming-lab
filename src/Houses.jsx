import { Link } from "react-router-dom";
import gameOfThrones from "./gameOfThrones";

export default function Houses() {
  return (
    <div>
      <div className="header">
        <h2>Game of Thrones Houses</h2>
      </div>
      <div className="list">
        {gameOfThrones.map((house) => (
          <Link to={`/houses/${house.id}`} key={house.id}>
            {house.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
