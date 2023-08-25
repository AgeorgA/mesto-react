import PopupWithForm from './PopupWithForm';
import React from 'react';

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      title="Новое место"
      name="add-card"
      buttonText="Создать"
      typeForm="popup__form_type_add-card"
    >
      <input
        name="name"
        id="card-name-input"
        placeholder="Название"
        type="text"
        className="popup__input"
        minLength="2"
        maxLength="30"
        required
        autoComplete="off"
      />
      <span className="popup__error card-name-input-error"></span>

      <input
        name="link"
        placeholder="Ссылка на картинку"
        id="card-img-input"
        type="url"
        className="popup__input"
        required
        autoComplete="off"
      />
      <span className="popup__error card-img-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;