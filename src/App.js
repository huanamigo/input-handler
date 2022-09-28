import React, { useState } from 'react';
import './App.module.scss';
import Input from './components/Input/Input';

console.log(
  "Ik, ik, it's not doing anything (yet), but the state mechanism is correct  "
);

function App() {
  const [value, changeValue] = useState({
    city: '',
    desc: '',
    isLoved: false,
    timeLived: '0',
  });

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      changeValue({
        ...value,
        [e.target.name]: e.target.checked,
      });
    } else {
      changeValue({
        ...value,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div>
      <Input
        headline="Enter your city"
        value={value.city}
        handleChange={handleChange}
        name="city"
        type="text"
      />
      <Input
        headline="Describe your city"
        value={value.desc}
        handleChange={handleChange}
        name="desc"
        type="textarea"
      />
      <Input
        headline="Do you like this city?"
        value={value.isLoved}
        handleChange={handleChange}
        name="isLoved"
        type="checkbox"
      />

      <Input
        headline="How long you live here?"
        value={value.timeLived}
        handleChange={handleChange}
        name="timeLived"
        type="select"
      />
    </div>
  );
}

export default App;
