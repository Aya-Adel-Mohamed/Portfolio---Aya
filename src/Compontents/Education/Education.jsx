import React from 'react';
import styles from './Education.module.css'

export default function Education() {


  return (
    <>

      <section id="education" className={`${styles.bgeducation} d-flex align-items-center`}>
        <div className="container px-4">
          <div className="row gx-0 gx-lg-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className={`${styles.h2Content} ${styles.animate} mt-5 mt-md-0 mb-3`}>Education Qualifications</h2>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className={`${styles.accordionItem} ${styles.bgItem} accordion-item`}>
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className={`${styles.accordionButton} accordion-button fw-bold fs-6`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      <i className='fa fa-graduation-cap me-2 fs-6 fa-fade'></i>2017 - 2022
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne" >
                    <div className={`${styles.accordionBody} accordion-body `}>
                      <p className='mb-0'>Bachelor's degree in Electrical Engineering, Communications and  Electronics Department, Alexandria University.</p>
                      <p className='mb-0'><strong>Grade :</strong> Very good with honors (B+ 82.59%).</p>
                      <p className='mb-0'><strong>Graduation Project : </strong>Automated Configuration Network (AutoNet). </p>
                      <p className='mb-0 '><strong>Graduation Project Grade : </strong>Excellent.</p>

                    </div>
                  </div>
                </div>
                <div className={`${styles.accordionItem} ${styles.bgItem} accordion-item`}>
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className={`${styles.accordionButton} accordion-button fw-bold fs-6`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      <i className='fa fa-code me-2 fs-6 fa-fade'></i>Aug 2022 - Nov 2022
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className={`${styles.accordionBody} accordion-body `}>
                      <p>4-Month Diploma Front-end Developer in Route Academy Egyptian IT- Training Center.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className={`${styles.h2Content} ${styles.animate2} mb-3`}>Training</h2>
              <div className={`${styles.contentTraining} ${styles.bgItems} mb-3 p-4 rounded-3 position-relative`}>

                <p className={`${styles.accordionBody} accordion-body `}>I attended 2 weeks Training at <strong>MANTRAC</strong> during my summer internship program from: 5th of September 2021 to 19th of September 2021.</p>
                <p className={`${styles.accordionBody} accordion-body `}>I attended 2 weeks Training at <strong>ALEXANDRIA ELECTRICITY DISTRIBUTION COMPANY</strong> during my summer internship program from: 12th of September 2020 to 1st of October 2020.</p>
                <p className={`${styles.accordionBody} accordion-body `}>I attended 2 weeks Training at <strong>ALEXANDRIA ELECTRICITY DISTRIBUTION COMPANY</strong> during my summer internship program from: 14th of August 2021 to 2nd of September 2021.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}