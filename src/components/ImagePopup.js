function ImagePopup({ isClose, ...props }) {
  return (
    <div className={`popup popup_hover-black popup_type_image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button
          type="button"
          id="close-big-image"
          aria-label="Закрыть"
          className="popup__close-button button"
          onClick={isClose}
        ></button>
        <img className="popup__image" src={props.card?.link} alt={props.card?.name} />
        <h2 className="popup__name-image">{props.card?.name}</h2>
      </div>
    </div>
  );
}
export default ImagePopup;
