import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Nav, Navbar, Offcanvas, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaSitemap, FaSearch } from "react-icons/fa";
import './css/navigationBar.css';
import logo from '../public/images/BSPTCL Logo & Name.gif';
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { GoTriangleRight } from "react-icons/go";



//overlay


function NavigationBar() {
    //offcanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //About Dropdown
    const [isAboutHovered, setAboutHovered] = useState(false);

    //transmission N/W dropdown
    const [isTransmissionHovered, setTransmissionHovered] = useState(false);

    //transmission N/W CurInfrastructure dropdown
    const [isCurInfrastructureHovered, setCurInfrastructureHovered] = useState(false);

    //transmission N/W SysParameters dropdown
    const [isSysParametersHovered, setSysParametersHovered] = useState(false);

    //transmission N/W UpcomInfrastructure dropdown
    const [isUpcomInfrastructureHovered, setUpcomInfrastructureHovered] = useState(false);

    //Media dropdown
    const [isMediaHovered, setMediaHovered] = useState(false);

    // Procrument dropdown
    const [isProcurementHovered, setProcurementHovered] = useState(false);

    //STU dropdown
    const [isSTUHovered, setSTUHovered] = useState(false);

    //STU Regulations dropdown
    const [isRegulationsHovered, setRegulationsHovered] = useState(false);

    //Employee dropdown
    const [isEmployeeHovered, setEmployeeHovered] = useState(false);

    //voice search
    const [text, setText] = useState('');

    const voiceSearch = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-GB';
        recognition.onresult = function (event) {
            setText(event.results[0][0].transcript);
            console.log(event.results[0][0].transcript);
        }
        recognition.start();
    }

    //Text translation
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

    const { t } = useTranslation();



    const [theme, setTheme] = useState('day'); // Initial theme state

    // Load theme from localStorage when the component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'day'; // default to 'day'
        setTheme(savedTheme);
        document.body.classList.add(`${savedTheme}-theme`);
    }, []);

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = theme === 'day' ? 'night' : 'day';
        setTheme(newTheme);

        // Remove the previous theme class from body and add the new one
        document.body.classList.remove(`${theme}-theme`);
        document.body.classList.add(`${newTheme}-theme`);

        // Save the new theme in localStorage
        localStorage.setItem('theme', newTheme);
    };

    // Function to change font size
    const [fontSize, setFontSize] = useState(100); // Default size in percentage (100%)

    const increaseFontSize = () => {
        if (fontSize < 110) { // Set max limit (e.g. 150%)
            setFontSize(fontSize + 10);
        }
    };

    const decreaseFontSize = () => {
        if (fontSize > 90) { // Set min limit (e.g. 70%)
            setFontSize(fontSize - 10);
        }
    };

    const resetFontSize = () => {
        setFontSize(100); // Reset to default (100%)
    };

    // Apply font size to html element
    useEffect(() => {
        document.documentElement.style.setProperty('font-size', `${fontSize}%`);
    }, [fontSize]);


    //Skip to main content
    const navigate = useNavigate();
    const location = useLocation();
    // Function to handle scroll with an offset
const skipToMainContent = () => {
    if (location.pathname === '/') {
        // If already on the homepage, scroll to the content section
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            const offset = 90; // Adjust this value based on your navigation bar height
            const elementPosition = mainContent.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    } else {
        // Navigate to the homepage and scroll to the content
        navigate('/', { state: { skipToMain: true } });
    }
};

// Use this logic after navigation
useEffect(() => {
    if (location.state?.skipToMain) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            const offset = 90; // Adjust this value based on your navigation bar height
            const elementPosition = mainContent.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}, [location]);
// for tender scrolling
const TenderScroll = () => {
    const section = document.getElementById('tender');
    const offset = 120; // Adjust this value based on your navbar height
    const yOffset = section.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
  };
  

  const Tenderlocation = useLocation();

  useEffect(() => {
    if (Tenderlocation.hash === '#tender') {
      // Scroll only after a small delay to let the page load first
      setTimeout(() => {
        const section = document.getElementById('tender');
        if (section) {
          const offset = 120; // Adjust based on navbar height
          const yOffset = section.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
      }, 0);  // Small timeout to wait for the page render
    }
  }, [Tenderlocation]);
  
  


    return (
        <>
            {/* ---------utility link--------------- */}
            <div className='utilityLink'>
                <div className="leftSideDisplay">
                    <Link to="">An ISO 27001:2013 Company</Link>
                </div>
                <div className="rightSideDisplay">
                <button onClick={skipToMainContent} style={{ cursor: 'pointer', borderRight: '1px solid gray' }}>{t('Skip to Main Content')}</button>
                    <hr />
                    <Link to="/screen-reader" style={{ borderRight: '1px solid gray' }}>Screen Reader</Link>
                    <button onClick={decreaseFontSize} style={{ cursor: 'pointer' }}>A-</button>
                    <button onClick={resetFontSize} style={{ cursor: 'pointer' }}>A</button>
                    <button onClick={increaseFontSize} style={{ cursor: 'pointer', borderRight: '1px solid gray' }}>A+</button>
                    <button onClick={toggleTheme} style={{ cursor: 'pointer', borderRight: '1px solid gray' }}>
                        {theme === 'day' ? <FaMoon /> : <MdSunny />}
                    </button>
                    <button onClick={() => changeLanguage('en')}><RiEnglishInput /></button>
                    <button style={{ borderRight: '1px solid gray' }}  onClick={() => changeLanguage('hi')}>हि</button>
                    <Link to="/sitemap"><FaSitemap /></Link>
                </div>

            </div>
            {/* -------------------utility link end-------------- */}

            <div className='parent'>
                <div className="logoAndLink">
                    {/* ------------Company Logo ----------------------*/}
                    <div  className='companyLogo'>
                        <Link to="/"><Image  src={logo} loop="1" alt='BSPTCL' className='logoImage' /></Link>
                    </div>

                    {/* -------------------Main Link----------------- */}
                    <div className='mainLinkAndSearchBar'>
                        {/* -----search bar and company link----------  */}
                        <div className="searchBarAndCompanyLink">
                            {/* ----------------Search Bar------------ */}
                            <div className='searchBar'>
                                <span style={{ marginRight: '8px' }}>
                                    <FaSearch />
                                </span>
                                <input
                                    name="voiceText"
                                    id="voiceText"
                                    placeholder="Enter Your Text"
                                    style={{ border: '0px', height: '1.4rem', width: '100%' }}
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                ></input>
                                <span onClick={voiceSearch}><FaMicrophone /></span>
                            </div>

                        </div>

                        {/* ----------------------Main Link---------------------------------- */}
                        <div className="mainLink">
                            <div className="crossEffect"></div>
                            <Navbar collapseOnSelect expand="lg">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">
                                        {/* ----About Us--- */}
                                        <li className='navLinkcolor'
                                            onMouseOver={() => setAboutHovered(true)}
                                            onMouseLeave={() => setAboutHovered(false)}>
                                            {t('about')}<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isAboutHovered && (

                                                <div className='AboutDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="/company-overview" className='navLinkcolor' style={{ borderBottom: '1px solid black',width:'100%' }}>{t('overview')}</Link>
                                                        < Link to='/board-directors' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>{t('directors')}</Link>
                                                        < Link to='/organization-structure' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>{t('org_strct')}</Link>
                                                        < Link to='/awards-achievements' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Awards & Achievements</Link>
                                                        < Link to='/certificates' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Certificates</Link>
                                                        < Link className='navLinkcolor' >Reports and Accounts</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        {/* Transmission Link and Dropdwon */}


                                        <div className='navLinkcolor'
                                            onMouseOver={() => setTransmissionHovered(true)}
                                            onMouseLeave={() => setTransmissionHovered(false)}
                                        >
                                            Transmission N/W<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isTransmissionHovered && (

                                                <div className='transmissionDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        <li className='navLinkcolor' style={{ borderBottom: '1px solid black' }}
                                                            onMouseOver={() => setCurInfrastructureHovered(true)}
                                                            onMouseLeave={() => setCurInfrastructureHovered(false)}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>Current Infrastructure<span style={{ color: '#db8204' }}><GoTriangleRight /></span></div>
                                                            {isCurInfrastructureHovered && (
                                                                <div className='CurInfrastructureDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link to='/transmission-lines' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transmission Lines</Link>
                                                                        < Link to='/grids'  className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grids</Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </li>
                                                        <Link
                                                            to="public/Documents/Bihar-Power-Map.pdf"
                                                            className='navLinkcolor'
                                                            style={{ borderBottom: '1px solid black' }}
                                                            onClick={(e) => {
                                                                e.preventDefault(); // Prevent default handling
                                                                window.open("/Documents/Bihar-Power-Map.pdf", "_blank"); // Open the PDF in a new tab
                                                            }}
                                                        >
                                                            Power Map
                                                        </Link>
                                                        <li className='navLinkcolor' style={{ borderBottom: '1px solid black',paddingLeft:'0.6rem' }}
                                                            onMouseOver={() => setSysParametersHovered(true)}
                                                            onMouseLeave={() => setSysParametersHovered(false)}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}> System Parameters<span style={{ color: '#db8204' }}><GoTriangleRight /></span></div>
                                                            {isSysParametersHovered && (
                                                                <div className='SysParametersDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link to ='/TAFM' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>TAFM</Link>
                                                                        < Link to='/atc-ttc' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>ATC/TTC</Link>
                                                                        < Link to='/peak-demand-met' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Peak Demand Met</Link>
                                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Load Pattern</Link>
                                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>ARR</Link>
                                                                    </div>
                                                                </div>

                                                            )}

                                                        </li>
                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transmission Loss</Link>
                                                        < li className='navLinkcolor'
                                                            onMouseOver={() => setUpcomInfrastructureHovered(true)}
                                                            onMouseLeave={() => setUpcomInfrastructureHovered(false)}>
                                                            Upcoming Infrastructure<span style={{ color: '#db8204' }}><GoTriangleRight /></span>
                                                            {isUpcomInfrastructureHovered && (
                                                                <div className='UpcomInfrastructureDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link to='/upcoming-transmission-lines' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transmission Lines</Link>
                                                                        < Link to='/upcoming-grids' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grids</Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </li>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* ------------Media Section---------- */}
                                        <li
                                            
                                            className='navLinkcolor'
                                              onMouseOver={() => setMediaHovered(true)}
                                            onMouseLeave={() => setMediaHovered(false)}
                                        >
                                            Media <span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isMediaHovered && (
                                                <div className='mediaDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        <Link to='/annual-reports' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Reports/Compendium</Link>
                                                        <Link to='/e-magazine' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>e-Magazine</Link>
                                                        <Link to='/photo-gallery' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Photo Gallery</Link>
                                                        <Link to='/twitter' className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Twitter</Link>
                                                        <Link to='/newspaper-clippings' className='navLinkcolor'>Newspaper Clippings</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>



                                        {/* Procurement Section */}
                                        <li
                                            className='navLinkcolor'
                                            onMouseOver={() => setProcurementHovered(true)}
                                            onMouseLeave={() => setProcurementHovered(false)}>
                                            Procurement<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isProcurementHovered && (

                                                <div className='procurementDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Schedule of Rate</Link>
                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Policy</Link>
                                                        <Link to="/#tender" href="#"
  onClick={(e) => {
    TenderScroll();
  }} className="navLinkcolor" style={{ borderBottom: '1px solid black' }}>
        Tenders
      </Link>
                                                        < Link to="https://eproc2.bihar.gov.in/EPSV2Web/" className='navLinkcolor' target="_blank"
                                                            rel="noopener noreferrer" style={{ borderBottom: '1px solid black' }}>e-Procurement</Link>
                                                        < Link to="https://gem.gov.in/" className='navLinkcolor' target="_blank"
                                                            rel="noopener noreferrer" >GeM</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        {/* STU Section */}

                                        <li className='navLinkcolor'
                                            onMouseOver={() => setSTUHovered(true)}
                                            onMouseLeave={() => setSTUHovered(false)}>
                                            STU<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isSTUHovered && (

                                                <div className='stuDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}
                                                            onMouseOver={() => setRegulationsHovered(true)}
                                                            onMouseLeave={() => setRegulationsHovered(false)}>
                                                            Regulations<span style={{ color: '#db8204' }}><GoTriangleRight /></span>
                                                            {isRegulationsHovered && (
                                                                <div className='RegulationsDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grid Code of Bihar</Link>
                                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grid Code of India</Link>
                                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Electricity Act, 2003</Link>
                                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>other regulation 1</Link>
                                                                        < Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>other regulation 2</Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </Link>
                                                        < Link to="/tariff-petitons" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Tariff Petitons</Link>
                                                        < Link className='navLinkcolor' >Open Access</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        {/* Employee Section */}
                                        <li className='navLinkcolor'
                                            onMouseOver={() => setEmployeeHovered(true)}
                                            onMouseLeave={() => setEmployeeHovered(false)}>
                                            Employee<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isEmployeeHovered && (

                                                <div className='employeeDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="/#office-notification" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Office Order</Link>
                                                        < Link to="/#office-notification" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transfer/Posting</Link>
                                                        < Link to="/#office-notification" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Circulars</Link>
                                                        < Link to="http://pay.bsphcl.org/" className='navLinkcolor' target="_blank"
                                                            rel="noopener noreferrer" style={{ borderBottom: '1px solid black' }}>Pay & Pension</Link>
                                                        < Link to="https://apar.bsphcl.co.in/" className='navLinkcolor' target="_blank"
                                                            rel="noopener noreferrer" style={{ borderBottom: '1px solid black' }}>APAR</Link>
                                                        < Link to="https://medical.bsphcl.co.in/" className='navLinkcolor' target="_blank"
                                                            rel="noopener noreferrer" style={{ borderBottom: '1px solid black' }}>Mediclaim</Link>
                                                        < Link to="https://ess.bihar.gov.in:44300/irj/portal" className='navLinkcolor' target="_blank"
                                                            rel="noopener noreferrer" style={{ borderBottom: '1px solid black' }}>ESS\MSS</Link>
                                                        < Link to="http://125.16.220.20:8077/Form16" className='navLinkcolor' target="_blank"
                                                            rel="noopener noreferrer" style={{ borderBottom: '1px solid black' }}>Form 16</Link>
                                                        <Link
                                                            to="https://www.google.com"
                                                            className='navLinkcolor'
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            ERP
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>


                                        {/*-------------------------------------Hamburger section -----------------------------------*/}
                                        <Link to="#" className='navLinkcolor'>
                                            <RxHamburgerMenu onClick={handleShow} />
                                            <Offcanvas show={show} onHide={handleClose} style={{ background: 'linear-gradient(to right, #243B55, #141E30)', color: 'white' }}>
                                                <Offcanvas.Header closeButton>
                                                    <Offcanvas.Title>UTILITY LINK</Offcanvas.Title>
                                                </Offcanvas.Header>
                                                <Offcanvas.Body style={{ backgroundColor: 'gray' }}>
                                                    <div className="button-container">
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="btn">Button 1</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 2</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 3</Button>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="custom-button">Button 4</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 5</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 6</Button>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-2">
                                                            <div className="col">
                                                                <Button className="custom-button">Button 7</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 8</Button>
                                                            </div>
                                                            <div className="col">
                                                                <Button className="custom-button">Button 9</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Offcanvas.Body>
                                            </Offcanvas>
                                        </Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
