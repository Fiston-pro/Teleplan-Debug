//import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
    {
        title: "Do we need to connect all the wires into the unit",
        content: "No, as long as you know the job of each wire there is power supply for Power Up, ethernet cable to connect to ethos on the laptop in TA, Hdmi to show on the screen what is going on, 2 Optical Cables to download TA, provide signals and also one optical cable can do the job of two",
    },
    {
        title: "why we always connect to ground on legs and arms",
        content: "It mandatory to connect to ground to protect the electronics from ESD (Electrostatic Discharge) by removing charge from your body but its also prohibited when working with plugged in units with internal power supply because it have many volts that can be fatal"
    },
    {
        title: "Why we have to wait for a moment after replacing an  ic with hot air station ",
        content: "ICs have inside little components called transistors and when we apply heat some parts melt but when we let them cool slowly they return to their original shapes but when we don't it may cause short circuits which will damage it completely. "
    }
]
}

const styles = {
    // bgColor: 'white',
    titleTextColor: "#6372ff",
    rowTitleColor: "#6372ff",
    // rowContentColor: 'grey',
    // arrowColor: "red",
}

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export const Faqs = (props) => {

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>FAQs</h2>
          <p>
            Frequent Asked Questions
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className=' col-md-8 col-md-offset-2'>

            <Faq
                          data={data}
                          styles={styles}
                          config={config}
                      />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}