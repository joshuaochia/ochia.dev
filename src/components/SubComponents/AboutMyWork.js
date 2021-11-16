import React, { useState } from "react"
import * as classes from "./AboutMyWork.module.css"

const AboutMyWork = () => {
  const [firstQuestion, showFirstQuestion] = useState(false)
  const [secondQuestion, showSecondQuestion] = useState(false)
  const [thirdQuestion, showThirdQuestion] = useState(false)

  const firstHandler = () => showFirstQuestion(prev => !prev)
  const secondHandler = () => showSecondQuestion(prev => !prev)
  const thirdHandler = () => showThirdQuestion(prev => !prev)

  return (
    <section className="section--hidden">
      <div className="container">
        <div className="global-header">
          <div className="row QA-title">
            <div className="col-lg-6 col-10">
              <h1>Q & A about me </h1>
            </div>
            <div className="col-lg-6 col-2">
              <span className={`${classes["arrowdownQAtitle"]}`}>&#8595;</span>
            </div>
          </div>
        </div>

        <div
          onClick={firstHandler}
          className={`${classes["QAcontent"]} content col-lg-10 offset-lg-1`}
        >
          <div className="QA-content-title row">
            <div className="col-lg-11">
              <h4 className="title-QA">What hours I’m available? </h4>
            </div>

            <div className="col-lg-1">
              <h4 className="plus-icon">
                <i className="fas fa-plus"></i>
              </h4>
              <h4 className="plus-icon hidden">
                <i className="fas fa-minus"></i>
              </h4>
            </div>
          </div>

          {firstQuestion && (
            <div className="QA-content-body pt-2 hidden">
              <p>8:00 am - 8:00 pm (GMT+8)</p>
            </div>
          )}
        </div>

        <div
          onClick={secondHandler}
          className={`${classes["QAcontent"]} content col-lg-10 offset-lg-1`}
        >
          <div className="QA-content-title row">
            <div className="col-lg-11">
              <h4 className="title-QA">How much I charge hourly?</h4>
            </div>

            <div className="col-lg-1">
              <h4 className="plus-icon">
                <i className="fas fa-plus"></i>
              </h4>
              <h4 className="plus-icon hidden">
                <i className="fas fa-minus"></i>
              </h4>
            </div>
          </div>

          {secondQuestion && (
            <div className="QA-content-body pt-2 hidden">
              <p>Minimum of 15$/hr</p>
            </div>
          )}
        </div>

        <div
          onClick={thirdHandler}
          className={`${classes["QAcontent"]} content col-lg-10 offset-lg-1`}
        >
          <div className="QA-content-title row">
            <div className="col-lg-11">
              <h4 className="title-QA">What language I speak?</h4>
            </div>

            <div className="col-lg-1">
              <h4 className="plus-icon">
                <i className="fas fa-plus"></i>
              </h4>
              <h4 className="plus-icon hidden">
                <i className="fas fa-minus"></i>
              </h4>
            </div>
          </div>

          {thirdQuestion && (
            <div className="QA-content-body pt-2 hidden">
              <p>Cebuano, Tagalog, and English</p>

              <p>My fluency each language:</p>
              <p>Cebuano: 10/10</p>
              <p>Tagalog: 7/10</p>
              <p>English: 8/10</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default AboutMyWork
