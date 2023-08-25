import PopupWithForm from './PopupWithForm';
function ConfirmDeletePopup(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      isClose={props.isClose}
      title="Вы уверены?"
      name="confirm-form"
      buttonText="Да"
      typeForm="popup__form_type_confirm"
    ></PopupWithForm>
  );
}

export default ConfirmDeletePopup;
