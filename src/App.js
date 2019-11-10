import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from "./components/Customer";

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '채희승',
    'birthDay': '930605',
    'gender': '남자',
    'job': '개발자'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthDay': '931112',
    'gender': '남자',
    'job': '개그맨'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '박수홍',
    'birthDay': '921205',
    'gender': '남자',
    'job': '디자이너'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthDay={c.birthDay}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
