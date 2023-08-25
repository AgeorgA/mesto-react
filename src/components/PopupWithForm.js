function PopupWithForm(props) {
  const { isOpen, isClose } = props;
  return (
    <div className={`popup popup_type_${props.name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className={`popup__form ${props.typeForm}`} name={`${props.name}`}>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="popup__button button">
            {props.buttonText}
          </button>
        </form>
        <button
          aria-label="Закрыть"
          type="button"
          className="popup__close-button button"
          onClick={isClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
