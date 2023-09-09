import PopupWithForm from './PopupWithForm';
import React, { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(isOpen, isClose, onUpdateUser) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChange(e) {
    let value = e.target.value;
    let inputName = e.target.name;
    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'about') {
      setDescription(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      isClose={isClose}
      onSubmit={handleSubmit}
      title="Редактировать профиль"
      name="fio-about-form"
      buttonText="Сохранить"
      typeForm="popup__form_type_edit-name"
    >
      <input
        name="name"
        id="name-input"
        type="text"
        className="popup__input"
        placeholder="Введите ФИО"
        minLength="2"
        maxLength="40"
        required
        autoComplete="off"
        onChange={handleChange}
        value={name || ''}
      />
      <span className="popup__error name-input-error"></span>

      <input
        name="about"
        id="about-input"
        type="text"
        className="popup__input"
        placeholder="О себе"
        minLength="2"
        maxLength="400"
        required
        autoComplete="off"
        onChange={handleChange}
        value={name || ''}
      />
      <span className="popup__error about-input-error "></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
