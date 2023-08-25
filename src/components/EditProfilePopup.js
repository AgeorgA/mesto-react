import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
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
      />
      <span className="popup__error about-input-error "></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
