import React from 'react'
import './Custom.css';

export default function Custom() {
  return (
    <>
       <section className="Custom">
        <div className="container">
          <h3>CUSTOM SYNTHESIS</h3>
          <div className="right-side">
            <h5>Home <i className="fas fa-angle-right"></i> CUSTOM SYNTHESIS</h5>
          </div>
        </div>
      </section>

      <section className="AnalysisService">
        <div className="container">
          <h1>PHARMACEUTICAL STANDARDS</h1>
          <p className='para'>Our Synthesis Service team consists with chemists skilled at performing complex, multi-step syntheses and solving challenging chemistry problems. The synthesis laboratories have a broad range of capabilities to fulfill your synthetic chemistry needs, especially the stable isotope labeled compounds and other special, commercial non-available research chemicals.
</p>
          <p>Stable Isotope Labeled Standards:</p>

          <div className="service-container">
            <ul className="service-list">
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Deuteriums</li>
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Carbon-13</li>
            </ul>

            <ul className="service-list">
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Nitrogen-15</li>
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Oxygen-18</li>
            </ul>
            <ul className="service-list">
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Metabolites/Glucuronides</li>
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Degradation Products/Impurities</li>
            </ul>
          </div>

            <h1>RESEARCH CHEMICALS</h1>
          <p className='para'>Our Synthesis Service team consists with chemists skilled at performing complex, multi-step syntheses and solving challenging chemistry problems. The synthesis laboratories have a broad range of capabilities to fulfill your synthetic chemistry needs. We provide non-FTE/FTE service in synthesizing special, commercial non-available research chemicals for medicinal and biological studies.
          </p>

          <div className="service-container">
            <ul className="service-list">
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Inhibitor reference compounds</li>
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Custom Designed Analogs</li>
            </ul>

            <ul className="service-list">
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Chiral Compounds</li>
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Heterocyclic Building Blocks</li>
            </ul>
            <ul className="service-list">
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Commercial non-available research chemicals</li>
              <li><i className="fas fa-angle-right" style={{ color: 'white' }}></i>Highly demanded API's</li>
            </ul>

          </div>
        </div>
      </section>
    </>
  )
}
