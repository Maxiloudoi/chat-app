import React from 'react';
import Contact from './components/Contact.jsx';


function App() {
  const firstPerson = {
    name: "Jose Bradley",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    status: true,
    online: true,
  }
  const secondPerson = {
    name: "Anna Reyes",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    status: false,
    online: false,
  }
  const thirdPerson = {
    name: "Pearl Wood",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    status: true,
    online: true,
  }
  return (
    <div className="App">

      <Contact {...firstPerson}/>
      <Contact {...secondPerson}/>
      <Contact {...thirdPerson}/>
      
      
    </div>
  );
}

export default App;
