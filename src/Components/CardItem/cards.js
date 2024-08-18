import "./card.css";

const Card = (props) => {
  const { data } = props;
  return (
    <li className="card-item-container">
      <h3>{data.title}</h3>
      <hr className="break-line" />
      <p>{data.description}</p>
    </li>
  );
};

export default Card;
