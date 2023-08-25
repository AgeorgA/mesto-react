import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDelCardPopupOpen, setIsConfirmDelCardPopupOpen] = React.useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleConfirmDeleteClick = () => {
    setIsConfirmDelCardPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDelCardPopupOpen(false);
    setSelectedCard(null);
  };

  const [selectedCard, setSelectedCard] = React.useState(null);
  const handleCardClick = data => {
    setSelectedCard(data);
  };
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick} // handleEditAvatarClick
        onAddPlace={handleAddPlaceClick} // handleAddPlaceClick
        onEditAvatar={handleEditAvatarClick} // handleEditProfileClick
        onConfirmDelete={handleConfirmDeleteClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
        // name={name}
        // title={editAvatarTitle}
      />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        isClose={closeAllPopups}
        // name={name}
        // title={editProfileTitle}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        isClose={closeAllPopups}
        // name={name}
        // title={addPlaceTitle}
      />
      <ConfirmDeletePopup
        isOpen={isConfirmDelCardPopupOpen}
        onClose={closeAllPopups}
        // name={name}
        // title={confirmDeleteTitle}
      />
      <ImagePopup isClose={closeAllPopups} card={selectedCard} />
    </div>
  );
}

export default App;

//
//

//     <div className="popup" id="popup_add-card">
//       <div className="popup__container">
//         <form name="card-add-form" className="popup__form" id="popup__form_card" noValidate>
//           <h2 className="popup__title">Новое место</h2>
//           <button
//             type="submit"
//             aria-labelledby="Добавить"
//             className="popup__submit-card popup__button button"
//           >
//             Создать
//           </button>
//         </form>
//         <button
//           type="button"
//           id="close-card"
//           aria-label="Закрыть"
//           className="popup__close-button button"
//         ></button>
//       </div>
//     </div>

//     <div className="popup" id="popup_confirm">
//       <div className="popup__container">
//         <form
//           name="confirm-form"
//           className="popup__form"
//           id="popup__form_confirm-form"
//           noValidate
//         >
//           <h2 className="popup__title">Вы уверены?</h2>
//           <button
//             type="submit"
//             aria-labelledby="Да"
//             className="popup__submit popup__button button"
//           >
//             Да
//           </button>
//         </form>
//         <button
//           type="button"
//           id="close-confirm"
//           aria-label="Закрыть"
//           className="popup__close-button button"
//         ></button>
//       </div>
//     </div>
//     <div className="popup popup_hover-black" id="popup-image">
//       <div className="popup__image-container">
//         <button
//           type="button"
//           id="close-big-image"
//           aria-label="Закрыть"
//           className="popup__close-button button"
//         ></button>
//         <img className="popup__image" src="#" alt="" />
//         <h2 className="popup__name-image"></h2>
//       </div>
//     </div>
//   </div>
