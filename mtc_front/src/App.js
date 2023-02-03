import './App.css';
import AddFiles from './components/AddFiles';
import './App.css';
import ListFiles from './components/ListFiles';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<AddFiles />} />
          <Route path="/liste" element={<ListFiles />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
//package 1: npm install pdfjs-dist@2.15.349
//package 2: npm install @react-pdf-viewer/core@3.7.0
//package 3: npm i @react-pdf-viewer/default-layout
//package 4: npm i react-router-dom
//package 5: npm install bootstrap@5.3.0-alpha1