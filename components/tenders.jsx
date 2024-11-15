import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/tenders.css';

function Tenders() {
  const [activeButtonLeft, setactiveButtonLeft] = useState('ActiveTenders');
  const [activeButtonRight, setactiveButtonRight] = useState('OfficeOrders');
  const [showActiveTendersL, setshowActiveTendersL] = useState(true);
  const [showCancelledTendersL, setshowCancelledTendersL] = useState(false);
  const [showArhivedTendersL, setshowArchivedTendersL] = useState(false);
  const [showOfficeOrdersR, setshowOfficeOrdersR] = useState(true);
  const [showTransferPostingsR, setshowTransferPostingsR] = useState(false);
  const [showCircularsR, setshowCircularsR] = useState(false);


  const handleButtonClick = (section, type) => {
    if (section === 'left') {
      setshowActiveTendersL(type === 'ActiveTenders');
      setshowCancelledTendersL(type === 'CancelledTenders');
      setshowArchivedTendersL(type === 'ArchivedTenders');
      setactiveButtonLeft(type);
    } else {
      setshowOfficeOrdersR(type === 'OfficeOrders');
      setshowTransferPostingsR(type === 'TransferPostings');
      setshowCircularsR(type === 'Circulars');
      setactiveButtonRight(type);
    }
  };

  return (
    <div className="container1" data-aos="fade-up" data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('left', 'ActiveTenders')}
            className={`button ${activeButtonLeft === 'ActiveTenders' ? 'active' : ''}`}
          >
            Active Tenders
          </button>
          <button
            onClick={() => handleButtonClick('left', 'CancelledTenders')}
            className={`button ${activeButtonLeft === 'CancelledTenders' ? 'active' : ''}`}
          >
            Cancelled Tenders
          </button>
          <button
            onClick={() => handleButtonClick('left', 'ArchivedTenders')}
            className={`button ${activeButtonLeft === 'ArchivedTenders' ? 'active' : ''}`}
          >
            Archived Tenders
          </button>
        </div>
        <div className="content-container">
          {showActiveTendersL && (
            <div className="content">
              {/* Display Tenders Content for Section A */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 26/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 27/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 28/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 33/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              {/* Add more content as needed */}
              <Link to='/active-tenders'><button className="view-more-button">View More</button></Link>
            </div>
          )}
          {showCancelledTendersL && (
            <div className="content">
              {/* Display Circulars Content for Section A */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 29/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 30/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 34/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <Link to='/cancelled-tenders'><button className="view-more-button">View More</button></Link>
            </div>
          )}

         {showArhivedTendersL && (
            <div className="content">
              {/* Display Circulars Content for Section A */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 31/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 32/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 38/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 39/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 40/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 41/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <Link to='/archive-tenders'><button className="view-more-button">View More</button></Link>
            </div>
          )}
        </div>
      </div>

      <div className="separator"></div>

      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('right', 'OfficeOrders')}
            className={`button ${activeButtonRight === 'OfficeOrders' ? 'active' : ''}`}
          >
            Office Orders
          </button>
          <button
            onClick={() => handleButtonClick('right', 'TransferPostings')}
            className={`button ${activeButtonRight === 'TransferPostings' ? 'active' : ''}`}
          >
            Transfer Postings
          </button>
          <button
            onClick={() => handleButtonClick('right', 'Circulars')}
            className={`button ${activeButtonRight === 'Circulars' ? 'active' : ''}`}
          >
            Circulars
          </button>
        </div>
        <div className="content-container">
          {showOfficeOrdersR && (
            <div className="content">
              {/* Display Tenders Content for Section B */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding National Apprenticeship Training Scheme (NATS) at BSPTCL vide OO no 52 dated 19.01.2024</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding Duty chart for SLDC Control room on the eve of Deepawali and Chhath Puja</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding policy matters of BSPHCL vide OO no. 379 dated 11.07.2024</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              {/* Add more content as needed */}
              <Link to='/active-tender'><button className="view-more-button">View More</button></Link>
            </div>
          )}
          {showTransferPostingsR && (
            <div className="content">
              {/* Display Circulars Content for Section B */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding transfer of Store employees vide Notification No 1901-1905 dated 30-07-2024</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding posting of Sri Raushan Kumar(E12886), AEE vide Notification No 636 dated 01-03-24</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding transfer posting of AEEs and JEEs vide Notification No 823-825 dated 15.03.2024</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding transfer posting of CEs vide Notification No 800-801 dated 15.03.2024</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding additional charge to Sri Ashish Kumar, E04222, AEE (O and M), TC Muzaffarpur vide Notification No 2715 dated 02-11-2023</h6>
                  <div className="details-container">
                    <p>Department: HR</p>   
                    <p className='verticalSeparator'>|</p>               
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <button className="view-more-button">View More</button>
            </div>
          )}
           {showCircularsR && (
            <div className="content">
              {/* Display Circulars Content for Section B */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Regarding Standard Bidding Documents (SBD)- Rev 17 for turnkey projects for BSPTCL vide OO No-11 dated 08.02.2023</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>Adoption of Cyber Crisis management Plan- 2022</h6>
                  <div className="details-container">
                    <p>Department: HR</p>
                    <p className='verticalSeparator'>|</p>
                    <p>Issue Date: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tenders;