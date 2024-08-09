import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import OfficeOrder from './Pages/OfficeOrder.jsx';
import AnnualReport from './Pages/AnnualReport.jsx';
import ActiveTenders from './Pages/ActiveTenders.jsx';
import TariffDetails from './Pages/TariffDetails.jsx';
import ArchiveTenders from './Pages/ArchiveTenders.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    {/* <OfficeOrder/>  */}
    {/* <AnnualReport/> */}
    {/* <ActiveTenders/> */}
    {/* <TariffDetails/> */}
    <App/>
    {/* <ArchiveTenders/> */}
    {/* <Navbar/> */}
  </React.StrictMode>,
)
