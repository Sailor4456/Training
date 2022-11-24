// import React from 'react';
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const contacts = [{
    id: "1",
    name: "Dipesh",
    email: "abcd@efgh.com",
  }]
  return (
    <div className='ui container'>
      <Header />
      <AddContact style={{display:"inline"}} />
      <ContactList />
    </div>
  );
}

export default App;
