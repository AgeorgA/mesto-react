import PopupWithForm from './PopupWithForm';
function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      title="Обновить аватар"
      name="edit_avatar_form"
      buttonText="Сохранить"
      typeForm="popup__form_type_update-avatar"
    >
      <input
        name="avatar"
        placeholder="Ссылка на аватар"
        id="avatar-input"
        type="url"
        className="popup__input"
        required
        autoComplete="off"
      />
      <span className="popup__error avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
