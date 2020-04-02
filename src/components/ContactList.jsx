import React from 'react'
import Contact from './Contact'


const users = [
    {
      name: 'Robert Reyes',
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      online: false,
      status: false,
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      online: true,
      status: true,
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      online: true,
      status: true,
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      online: false,
      status: false,
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      online: true,
      status: true,
    }
  ];
  
const ContactList = () => (
    <div>
    {users.map(item => (
      <Contact name={item.name} image={item.avatar} online={item.online}status={item.status} />
    ))}
  </div>
);

export default ContactList ;
