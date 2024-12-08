import React from "react";


const Contactus = () => {
  return (
    <div>
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <main>
        <section className="contact-section">
          <h2>Contact Us</h2>

          <div className="contact-info">
            <p>
              <span className="icon">📍</span> 1650 Hwy 6, Ste 440 Sugar Land, TX -77478 USA
            </p>
            <p>
              <span className="icon">📞</span> Tel: +1 281-980-0325
            </p>
            <p>
              <span className="icon">✉</span> Email:{" "}
              <a href="mailto:coordinator@swamidayanand.org">
                coordinator@swamidayanand.org
              </a>
            </p>
          </div>

          <div className="contact-info">
            <p>
              <span className="icon">📍</span> A-74, Ground Floor, Sector-2, Noida-201301 (UP) India
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Scholarship Tracker</p>
      </footer>
    </div>
  );
};

export default Contactus;