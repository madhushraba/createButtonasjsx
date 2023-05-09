import React from 'react';
import Button from './component/Button';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="heading">Create a button in a separate file</h1>
      <Button className="button" onClick={() => alert('Created a new button in a new file')}>
        Click
      </Button>
      <Button className="button" onClick={() => alert('Create a button in a separate file')}>
        Click me
      </Button>
    </div>
  );
}
