import './App.css'; // Import your CSS file if applicable
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import AdminDashBoard from './Components/AdminDashBoard.js';

function App() {
  return (
    <div className="App">
      <Header /> 
      <div> 
      <AdminDashBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
