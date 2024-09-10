import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OfficeOrder from './Pages/OfficeOrder.jsx';
import AnnualReport from './Pages/AnnualReport.jsx';
import ActiveTenders from './Pages/ActiveTenders.jsx';
import TariffDetails from './Pages/TariffDetails.jsx';
import ArchiveTenders from './Pages/ArchiveTenders.jsx';
import Home from './Pages/Home.jsx';
import BoardMember from './Pages/BoardMember.jsx';
import Certificates from './Pages/Certificates.jsx';
import CompanyOverview from './Pages/CompanyOverview.jsx';
import TransmissionLines from './Pages/TransmissionLines.jsx';
import Grids from './Pages/Grids.jsx';
import TAFM from './Pages/TAFM.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/office-order" element={<OfficeOrder />} />
        <Route path="/annual-reports" element={<AnnualReport />} />
        <Route path="/active-tenders" element={<ActiveTenders />} />
        <Route path="/tariff-details" element={<TariffDetails />} />
        <Route path="/archive-tenders" element={<ArchiveTenders />} />
        <Route path="/board-directors" element={<BoardMember/>} />
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/company-overview" element={<CompanyOverview/>} />
        <Route path="/transmission-lines" element={<TransmissionLines/>} />
        <Route path="/grids" element={<Grids/>} />
        <Route path="/TAFM" element={<TAFM/>} />
      </Routes>
    </Router>
  );
}

export default App;
