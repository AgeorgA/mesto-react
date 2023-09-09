import PopupWithForm from './PopupWithForm';
import React, { useState, useEffect } from 'react';

function AddPlacePopup(...props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  function handleChange(e) {
    const value = e.target.value;
    const inputName = e.target.name;
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'link') {
      setLink(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      onSubmit={handleSubmit}
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
        onChange={handleChange}
        value={name || ''}
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
        onChange={handleChange}
        value={name || ''}
      />
      <span className="popup__error card-img-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
