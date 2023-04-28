import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import "../App.css";
import "./css/ApplyPage.css";

const ApplyPage = () => {
  useDocumentTitle('Apply to get listed | The Incognita');
  return (
    <div className="apply-page">
      <div className="container-content">
          <h1>Apply to get listed</h1>
          <p>
            <br />
            <br />
          </p>
          <form action="https://submit-form.com/OkZ4UNir">
            <label htmlFor="name">Network State Name</label>
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
              required={true}
            />
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              placeholder="URL"
              required={true}
            />
            <label htmlFor="mission">Mission (Max 80 characters)</label>
            <input
              type="text"
              id="mission"
              name="mission"
              maxlength="80"
              placeholder="Mission"
              required={true}
            />
            <label htmlFor="twitter">Twitter</label>
            <input type="text" id="twitter" name="twitter" placeholder="URL" />
            <label htmlFor="discord">Discord</label>
            <input type="text" id="discord" name="discord" placeholder="URL" />
            <label htmlFor="applicationLink">Application Link</label>
            <input
              type="text"
              id="applicationLink"
              name="applicationLink"
              placeholder="URL"
              required={true}
            />
            <label htmlFor="email">Email (Internal use only)</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL"
              required={true}
            />

            <button type="submit">Apply Now</button>
          </form>
        </div>
      </div>
  );
};

export default ApplyPage;