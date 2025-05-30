import React from 'react';
import './style.css';

import { useEffect, useState } from 'react';
import { Rooms } from '../Rooms/rooms';

export const MainPage = () => {
  const [rooms, setRooms] = useState([]);

  /*selectedroom handleOnCard*/

  useEffect(() => {
    fetch('http://localhost:4000/api/rooms')
      .then((response) => response.json())
      .then((data) => {
        setRooms(data.data);
        console.log(data);
      })

      .catch((error) => console.error('Chyba při načítání dat:', error));
  }, []);

  return (
    <main>
      <h1>Hlavní stránka</h1>
      <Rooms rooms={rooms} />
      {/*<Detail opened={opened} description={item.description} />*/}
    </main>
  );
};

/*return (
  <>
    <div className="panel" onClick={toggleOpened}>
      {item.name}
    </div>
    <Detail opened={opened} description={item.description} />
  </>
); a fci kdyz odnekduj zavolam stav nastavim hodnotu, naznacim jako mistnotst je vybrana
info poslat do kompenty rooms a tam v komp rooms tam nekam na div kde je mistnost pridat on click zavolat fci z kompenty z diteten na rodice...*/

/*export default MainPage;*/
