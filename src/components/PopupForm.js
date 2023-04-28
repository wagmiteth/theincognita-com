// Modal.js
import React from 'react';
import './css/PopupForm.css'; // Create a new CSS file for styling the modal

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
      <form action="https://submit-form.com/OkZ4UNir">
            <label for="name">Network State Name</label>
            <input
              type="hidden"
              name="_redirect"
              value="https://theincognita.com/thanks.html"
            />
            <input type="hidden" name="_append" value="false"/>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required="true"
            />
            <label for="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              placeholder="URL"
              required="true"
            />
            <label for="mission">Mission (Max 80 characters)</label>
            <input
              type="text"
              id="mission"
              name="mission"
              maxlength="80"
              placeholder="Mission"
              required="true"
            />
            <label for="twitter">Twitter</label>
            <input type="text" id="twitter" name="twitter" placeholder="URL" />
            <label for="discord">Discord</label>
            <input type="text" id="discord" name="discord" placeholder="URL" />
            <label for="applicationLink">Application Link</label>
            <input
              type="text"
              id="applicationLink"
              name="applicationLink"
              placeholder="URL"
              required="true"
            />
            <label for="email">Email (Internal use only)</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
              required="true"
            />

            <button type="submit">Apply Now</button>
          </form>
        {/* Close button */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopupForm;
