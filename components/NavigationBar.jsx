import React, { useState } from 'react';
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
import mediclaim from '../public/images/mediclaim.png'
import Email from '../public/images/Email.jpg'
import callDirectory from '../public/images/callDirectory.jpg'
import Twitter from '../public/images/Twitter.jpg'
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

    return (
        <>
            {/* ---------utility link--------------- */}
            <div className='utilityLink'>
            <div className="leftSideDisplay">
                    <a href="">An ISO 270001:2013 Company</a>
                </div>
                <div className="rightSideDisplay">
                    <a href="" style={{ borderRight: '1px solid gray' }}>Skip to Main Content</a>
                    <hr />
                    <a href="" style={{ borderRight: '1px solid gray' }}>Screen Reader</a>
                    <a href="" >A-</a>
                    <a href="" >A</a>
                    <a href="" style={{ borderRight: '1px solid gray' }}>A+</a>
                    <a href="" ><MdSunny /></a>
                    <a href="" style={{ borderRight: '1px solid gray' }}><FaMoon /></a>
                    <a href="" ><RiEnglishInput /></a>
                    <a href="" style={{ borderRight: '1px solid gray' }}>हि</a>
                    <a href=""><FaSitemap /></a>
                </div>

            </div>
            {/* -------------------utility link end-------------- */}

            <div className='parent'>
                <div className="logoAndLink">
                    {/* ------------Company Logo ----------------------*/}
                    <div className='companyLogo'>
                        <Image src={logo} loop="1" alt='BSPTCL' className='logoImage' />
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
                                        <Nav.Link href="#features" className='navLinkcolor'
                                            onMouseOver={() => setAboutHovered(true)}
                                            onMouseLeave={() => setAboutHovered(false)}>
                                            About Us<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isAboutHovered && (

                                                <div className='AboutDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Company Overview</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Board of Directors</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Organization Structure</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Awards & Achievements</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Certificates</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Reports and Accounts</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* Transmission Link and Dropdwon */}


                                        <Nav.Link href="" className='navLinkcolor'
                                            onMouseOver={() => setTransmissionHovered(true)}
                                            onMouseLeave={() => setTransmissionHovered(false)}
                                        >
                                            Transmission N/W<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isTransmissionHovered && (

                                                <div className='transmissionDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}
                                                            onMouseOver={() => setCurInfrastructureHovered(true)}
                                                            onMouseLeave={() => setCurInfrastructureHovered(false)}>
                                                            Current Infrastructure<span style={{ color: '#db8204' }}><GoTriangleRight /></span>
                                                            {isCurInfrastructureHovered && (
                                                                <div className='CurInfrastructureDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transmission Lines</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grids</Nav.Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Power Map</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}
                                                            onMouseOver={() => setSysParametersHovered(true)}
                                                            onMouseLeave={() => setSysParametersHovered(false)}>
                                                            System Parameters<span style={{ color: '#db8204' }}><GoTriangleRight /></span>
                                                            {isSysParametersHovered && (
                                                                <div className='SysParametersDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>TAFM</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>ATC/TTC</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Peak Demand Met</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Load Pattern</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>ARR</Nav.Link>
                                                                    </div>
                                                                </div>

                                                            )}

                                                        </Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transmission Loss</Nav.Link>
                                                        < Nav.Link className='navLinkcolor'
                                                            onMouseOver={() => setUpcomInfrastructureHovered(true)}
                                                            onMouseLeave={() => setUpcomInfrastructureHovered(false)}>
                                                            Upcoming Infrastructure<span style={{ color: '#db8204' }}><GoTriangleRight /></span>
                                                            {isUpcomInfrastructureHovered && (
                                                                <div className='UpcomInfrastructureDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transmission Lines</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grids</Nav.Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* ------------Media Section---------- */}
                                        <Nav.Link
                                            className='navLinkcolor'
                                            onMouseOver={() => setMediaHovered(true)}
                                            onMouseLeave={() => setMediaHovered(false)}
                                        >
                                            Media <span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isMediaHovered && (

                                                <div className='mediaDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Reports/ Compendium</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>e-Magazine</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Photo Gallery</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Twitter</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Newspaper Clippings</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>


                                        {/* Procurement Section */}
                                        <Nav.Link href="#deets"
                                            className='navLinkcolor'
                                            onMouseOver={() => setProcurementHovered(true)}
                                            onMouseLeave={() => setProcurementHovered(false)}>
                                            Procurement<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isProcurementHovered && (

                                                <div className='procurementDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Schedule of Rate</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Policy</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Tenders</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>e-Procurement</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >GeM</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* STU Section */}

                                        <Nav.Link href="" className='navLinkcolor'
                                            onMouseOver={() => setSTUHovered(true)}
                                            onMouseLeave={() => setSTUHovered(false)}>
                                            STU<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isSTUHovered && (

                                                <div className='stuDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="First" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}
                                                            onMouseOver={() => setRegulationsHovered(true)}
                                                            onMouseLeave={() => setRegulationsHovered(false)}>
                                                            Regulations<span style={{ color: '#db8204' }}><GoTriangleRight /></span>
                                                            {isRegulationsHovered && (
                                                                <div className='RegulationsDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grid Code of Bihar</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Grid Code of India</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Electricity Act, 2003</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>other regulation 1</Nav.Link>
                                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>other regulation 2</Nav.Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Tariff Petitons</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' >Open Access</Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>

                                        {/* Employee Section */}
                                        <Nav.Link href="#memes" className='navLinkcolor'
                                            onMouseOver={() => setEmployeeHovered(true)}
                                            onMouseLeave={() => setEmployeeHovered(false)}>
                                            Employee<span style={{ color: '#db8204' }}><GoTriangleDown /></span>
                                            {isEmployeeHovered && (

                                                <div className='employeeDropDown'>
                                                    <div className='triangle'><GoTriangleUp /></div>
                                                    <div className='dropDownMenu'>
                                                        < Nav.Link href="/office-order" className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Office Order</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Transfer/Posting</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Circulars</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Pay & Pension</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>APAR</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Mediclaim</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>ESS\MSS</Nav.Link>
                                                        < Nav.Link className='navLinkcolor' style={{ borderBottom: '1px solid black' }}>Form 16</Nav.Link>
                                                        <Nav.Link
                                                            href="https://www.google.com"
                                                            className='navLinkcolor'
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            ERP
                                                        </Nav.Link>
                                                    </div>
                                                </div>
                                            )}
                                        </Nav.Link>


                                        {/*-------------------------------------Hamburger section -----------------------------------*/}
                                        <Nav.Link href="#" className='navLinkcolor'>
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
                                        </Nav.Link>
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
