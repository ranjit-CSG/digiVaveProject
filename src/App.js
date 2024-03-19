// import './App.css'; // Import your CSS file if applicable
// import Header from './Components/Header.js';
// import Footer from './Components/Footer.js';
// import AdminDashBoard from './Components/AdminDashboard.js';

// function App() {
//   return (
//     <div className="App">
//       <Header /> 
//       <div> 
//       <AdminDashBoard />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file if applicable
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Login from './Components/Login/Login.js';
import AdminDashboard from './Components/AdminDashboard.js'; // Import the AdminDashboard component

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Route for AdminDashboard */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

