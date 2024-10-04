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
import Awards from './Pages/Awards.jsx'
import Grids from './Pages/Grids.jsx';
import TAFM from './Pages/TAFM.jsx';
import ATC_TTC from './Pages/ATC_TTC.jsx';
import OrganizationStructure from './Pages/OrganizationStructure.jsx';
import PeakDemand from './Pages/PeakDemand.jsx';
import NewsPaper_Clipping from './Pages/NewsPaper_Clipping.jsx';
import ScreenReader from './Pages/ScreenReader.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screen-reader" element={<ScreenReader/>} />
        <Route path="/office-order" element={<OfficeOrder />} />
        <Route path="/annual-reports" element={<AnnualReport />} />
        <Route path="/active-tenders" element={<ActiveTenders />} />
        <Route path="/tariff-petitons" element={<TariffDetails />} />
        <Route path="/archive-tenders" element={<ArchiveTenders />} />
        <Route path="/board-directors" element={<BoardMember/>} />
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/awards-achievements" element={<Awards/>} />
        <Route path="/organization-structure" element={<OrganizationStructure/>} />
        <Route path="/company-overview" element={<CompanyOverview/>} />
        <Route path="/transmission-lines" element={<TransmissionLines/>} />
        <Route path="/grids" element={<Grids/>} />
        <Route path="/TAFM" element={<TAFM/>} />
        <Route path="/atc-ttc" element={<ATC_TTC/> } />
        <Route path="/peak-demand-met" element={<PeakDemand/> } />

        <Route path="/newspaper-clippings" element={<NewsPaper_Clipping/> } />
      </Routes>
    </Router>
  );
}

export default App;
