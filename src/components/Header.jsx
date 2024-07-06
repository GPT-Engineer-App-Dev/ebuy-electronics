```jsx
import React from 'react';
import './Header.css'; // Assuming you will create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path-to-logo.png" alt="Logo" />
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="user-actions">
        <div className="user-account">
          <img src="/path-to-user-icon.png" alt="User Account" />
        </div>
        <div className="shopping-cart">
          <img src="/path-to-cart-icon.png" alt="Shopping Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
```

Note: You will need to create a corresponding CSS file (`Header.css`) to style the header component as per your design requirements. Also, replace `/path-to-logo.png`, `/path-to-user-icon.png`, and `/path-to-cart-icon.png` with the actual paths to your image assets.