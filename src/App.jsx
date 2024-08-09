import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OfficeOrder from './Pages/OfficeOrder.jsx';
import AnnualReport from './Pages/AnnualReport.jsx';
import ActiveTenders from './Pages/ActiveTenders.jsx';
import TariffDetails from './Pages/TariffDetails.jsx';
import ArchiveTenders from './Pages/ArchiveTenders.jsx';
import Home from './Pages/Home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/office-order" element={<OfficeOrder />} />
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/active-tenders" element={<ActiveTenders />} />
        <Route path="/tariff-details" element={<TariffDetails />} />
        <Route path="/archive-tenders" element={<ArchiveTenders />} />
      </Routes>
    </Router>
  );
}

export default App;
