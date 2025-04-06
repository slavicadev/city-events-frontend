import React, { useState } from 'react';
import axios from 'axios';

const AddEventForm = () => {
  const [event, setEvent] = useState({
    name: '',
    date: '',
    location: '',
    category: '',
  });

  const handleChange = (e) => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that all fields are filled out
    if (!event.name || !event.date || !event.location || !event.category) {
      alert('All fields are required');
      return;
    }

    try {
      // Send the event data to the backend
      await axios.post('http://localhost:4000/events', event);
      alert('Event added successfully');
      setEvent({ name: '', date: '', location: '', category: '' }); // Reset the form after successful submission
    } catch (error) {
      console.log('Error adding event:', error.response?.data || error.message);
      alert('Error adding event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input
          type="text"
          name="name"
          value={event.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={event.location}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={event.category}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEventForm;
