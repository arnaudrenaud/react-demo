import "./PersonCard.css";

const PersonCard = ({
  id,
  firstName,
  lastName,
  gender,
  dateOfBirth,
  imageUrl,
  onDelete,
}) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="Person-card">
      <img src={imageUrl} alt={fullName} className="Person-image" />
      <div className="Person-data">
        <b>{fullName}</b>
        <div>{gender === "female" ? "Femme" : "Homme"}</div>
        <div>{new Date(dateOfBirth).toLocaleDateString()}</div>
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default PersonCard;
