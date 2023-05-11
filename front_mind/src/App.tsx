import React, { useState, useEffect } from 'react';
import './style/App.css';
import { db } from './services/firebase';
import { collection, DocumentData, getDocs } from 'firebase/firestore/lite';

function App() {
  const [ sampleText, setSampleText ] = useState('sei la o que ta escrito aqui');
  const [ users, setUsers ] = useState<DocumentData[]>();

  useEffect(() => {
    fetch('/hello-world')
    .then((res) => res.json())
    .then((data) => setSampleText(data.init));

    const citiesCol = collection(db, 'usuarios');
    const citySnapshot = getDocs(citiesCol).then(
      (data) => {
        const newUsers = data.docs.map(doc => doc.data());
        setUsers(newUsers);
      }
    );
  }, []);

  const listUser = (user: DocumentData) => {

    return (
      <>
        <div>
          email: {user.email}
          last Name: {user.last_name}
          name: {user.name}
        </div>
      </>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {users?.map((user)=> listUser(user))}
      </header>
    </div>
  );
}

export default App;
