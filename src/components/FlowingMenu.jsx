import React from 'react';
import './FlowingMenu.css';

function FlowingMenu({ items = [] }) {
  // Create multiple duplicates for seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];
  
  return (
    <div className="flowing-menu-container">
      <div className="flowing-wrapper">
        <div className="flowing-track">
          {duplicatedItems.map((item, idx) => (
            <div key={`${item.text}-${idx}`} className="skill-item">
              <img 
                src={item.image} 
                alt={item.text} 
                className="skill-icon" 
                title={item.text}
              />
              <span className="skill-label">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
