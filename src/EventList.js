import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the backend
    axios.get('process.env.REACT_APP_API_URL/')
      .then(response => setEvents(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Upcoming City Events</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <h3>{event.name}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
