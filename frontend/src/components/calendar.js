import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Plus } from "lucide-react"; // Plus icon from lucide-react

export default function CalendarPage() {
  const [hoveredDate, setHoveredDate] = useState(null);
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState("");

  const handleAddEvent = () => {
    if (newEvent.trim()) {
      setEvents((prev) => ({
        ...prev,
        [selectedDate]: [...(prev[selectedDate] || []), newEvent],
      }));
      setNewEvent("");
      setSelectedDate(null);
    }
  };

  const handleCloseModal = () => {
    setSelectedDate(null);
    setNewEvent("");
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={() => {}}
        tileContent={({ date }) => (
          <div
            className="date-cell"
            onMouseEnter={() => setHoveredDate(date.toDateString())}
            onMouseLeave={() => setHoveredDate(null)}
          >
            {hoveredDate === date.toDateString() && (
              <button
                className="plus-icon"
                onClick={() => setSelectedDate(date.toDateString())}
              >
                <Plus size={16} />
              </button>
            )}
            {/* Display events under the date */}
            {events[date.toDateString()] && (
              <ul className="event-list">
                {events[date.toDateString()].map((event, idx) => (
                  <li key={idx}>{event}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      />

      {/* Modal for adding event */}
      {selectedDate && (
        <div className="event-modal">
          <div className="modal-header">
            <h3>Add Event for {selectedDate}</h3>
            <button className="close-btn" onClick={handleCloseModal}>
              X
            </button>
          </div>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter event name"
          />
          <button onClick={handleAddEvent}>Save</button>
        </div>
      )}
    </div>
  );
}