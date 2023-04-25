import { useParams } from "react-router-dom";
import gameOfThrones from "./gameOfThrones";

export default function Member() {
  const { houseId, memberId } = useParams();
  const house = gameOfThrones.find((house) => house.id === parseInt(houseId));
  const member = house.people.find((person) => person.id === parseInt(memberId));

  return (
    <div>
      <div className="header">
        <h2>{member.name}</h2>
      </div>
      <div className="desc">{member.description}</div>
    </div>
  );
}
