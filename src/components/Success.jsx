import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <img src="/assets/success.svg" alt="Success" />
      <h3>Great Success!</h3>
      <p>All {count} users were sent invitation.</p>
      <button 
        onClick={() => window.location.reload()}
        className="send-invite-btn">
            Back
        </button>
    </div>
  );
};
