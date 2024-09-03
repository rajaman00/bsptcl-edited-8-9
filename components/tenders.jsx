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
      <div className="section" id='tender'>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              {/* Add more content as needed */}
              <Link to="/active-tenders" className="view-more-button-link">
                <button className="view-more-button">View More</button>
              </Link>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <Link to="/cancelled-tenders" className="view-more-button-link">
                <button className="view-more-button">View More</button>
              </Link>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <Link to="/archive-tenders" className="view-more-button-link">
                <button className="view-more-button">View More</button>
              </Link>
            </div>
          )}
          
        </div>
      </div>

      <div className="section" id='office-notification' >
        <div className="button-container">
          <button id='office-order'
            onClick={() => handleButtonClick('right', 'OfficeOrders')}
            className={`button ${activeButtonRight === 'OfficeOrders' ? 'active' : ''}`}
          >
            Office Orders
          </button>
          <button id='transfer-posting'
            onClick={() => handleButtonClick('right', 'TransferPostings')}
            className={`button ${activeButtonRight === 'TransferPostings' ? 'active' : ''}`}
          >
            Transfer Postings
          </button>
          <button id='circulars'
            onClick={() => handleButtonClick('right', 'Circulars')}
            className={`button ${activeButtonRight === 'Circulars' ? 'active' : ''}`}
          >
            Circulars
          </button>
        </div>
        <div className="content-container">
          {showOfficeOrdersR && (
            <div className="content">
              {/* Display Office Orders Content for Section B */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 29/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <Link to="/office-order" className="view-more-button-link">
                <button className="view-more-button">View More</button>
              </Link>
            </div>
          )}
          {showTransferPostingsR && (
            <div className="content">
              {/* Display Transfer Postings Content for Section B */}
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 35/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>

              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 36/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 2</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              <div className="rowData">
                <div className="document-icon">
                  <img src="public/images/doc.png" alt="Document Icon" />
                </div>
                <div className="details-header">
                  <h6>NIT No. 37/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <Link to="/more-transfer-postings" className="view-more-button-link">
                <button className="view-more-button">View More</button>
              </Link>
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
                  <h6>NIT No. 39/PR/BSPTCL/2024</h6>
                  <div className="details-container">
                    <p>Department: Project 1</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Department: Project 1</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
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
                    <p>Department: Project 1</p>
                    <p>Date Of Issue: Jul 24, 2024</p>
                  </div>
                </div>
              </div>
              {/* Add more content as needed */}
              <Link to="/more-circulars" className="view-more-button-link">
                <button className="view-more-button">View More</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tenders;
