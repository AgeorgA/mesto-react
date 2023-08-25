import React from 'react';
import api from '../utils/Api.js';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userInfo, initialCards]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile content__profile">
        <button
          onClick={props.onEditAvatar}
          aria-label="Редактировать"
          type="button"
          className="profile__edit-avatar-button button"
        >
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </button>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button
            onClick={props.onEditProfile}
            aria-label="Редактировать"
            type="button"
            className="profile__edit-button button"
          ></button>
          <p className="profile__about-self">{userDescription}</p>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          aria-label="Добавить"
          className="profile__add-button button"
        ></button>
      </section>

      <section className="cards">
        {cards.map(item => (
          <Card key={item._id} card={item} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
