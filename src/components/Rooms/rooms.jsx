import React from 'react';

export const Rooms = ({ rooms }) => {
  return (
    <section>
      <h2>Naše pokoje</h2>
      <div className="rooms-container">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/*export default Rooms;*/

/*<div class="card">
          <img class="card__image" src="img/image1.svg" />
          <div class="card__title">Card 1</div>
          <div class="card__body">Sunt natus</div>
        </div>*/
