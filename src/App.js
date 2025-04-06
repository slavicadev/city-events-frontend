import React from 'react';
import AddEventForm from './AddEventForm'; // Make sure to import the AddEventForm component

function App() {
  return (
    <div className="App">
      <h1>Event Platform</h1>
      <p>Welcome to the Event Platform! Add your events here:</p>
      {/* Render the AddEventForm */}
      <AddEventForm />
    </div>
  );
}

export default App;







