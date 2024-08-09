import React, { useEffect } from 'react';
import '../components/css/footer.css';

 const Footer = () => {

//   useEffect(() => {
    // Initialize the map after the component has mounted
  //   const map = new window.google.maps.Map(document.getElementById("footerMap"), {
  //     center: { lat: 25.609, lng: 85.124 }, // Replace with your coordinates
  //     zoom: 15,
  //   });

  //   // Add a marker at the desired location
  //   new window.google.maps.Marker({
  //     position: { lat: 25.609, lng: 85.124 }, // Replace with your coordinates
  //     map,
  //     title: "Bihar State Load Despatch Centre",
  //   });
  // }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#3c3c3c' }}>
      <div className="footer1">
        <div className="contact1">
          <h4>CONTACT US</h4>
          <div className="contact-info" style={{ width: '100%' }}>
            <p>📍 Bihar State Load Despatch Centre, 4th Floor, Vidyut Bhawan, Bailey Road, Patna-1</p>
            <p>✉ feedback.biharsldc@gmail.com</p>
            <p>☎ (+91) 0612-2504442</p>
            <p>☎ (+91) 0612-2504305 (FAX)</p>
          </div>
        </div>

        <div className="others">
          <h4>OTHERS</h4>
          <p><a href="#">Feedback</a></p>
          <p><a href="#">Disclaimer</a></p>
          <p><a href="#">Upload Documents</a></p>
          <p><a href="#">RTI</a></p>
        </div>

        <div id="footerMap" style={{ height: '10rem', width: '30%'}}>
          {/* Google Map will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
