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
      // API URL is taken from environment variables
      const API_URL = process.env.REACT_APP_API_URL;

      // Send the event data to the backend
      await axios.post(`${API_URL}/events`, event)
        .then(res => {
          console.log("Event added:", res.data);
          alert('Event added successfully');
        })
        .catch(err => {
          console.error("Error adding event", err);
          alert('Error adding event');
        });

      // Reset the form after successful submission
      setEvent({ name: '', date: '', location: '', category: '' });

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

