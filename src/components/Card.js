function Card({ onCardClick, ...props }) {
  const handleClick = () => {
    onCardClick(props.card);
  };
  return (
    <div className="card">
      <div className="card__img-place">
        <img
          className="card__img"
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
        />
      </div>
      <button aria-label="Удаление" type="button" className="card__trashbox button"></button>

      <div className="card__division">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like-container">
          <button aria-label="Лайк" type="button" className="card__heart"></button>
          <span className="card__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
