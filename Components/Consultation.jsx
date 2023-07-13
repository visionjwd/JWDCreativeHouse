import React, { useEffect, useState } from 'react';
import style from '../styles/consultation.module.css';

function loadCalendlyScript() {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = resolve;
    document.body.appendChild(script);
  });
}

function Consultation() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    if (!widgetLoaded) {
      loadCalendlyScript().then(() => {
        setWidgetLoaded(true);
      });
    }
  }, [widgetLoaded]);

  useEffect(() => {
    if (widgetLoaded && typeof window.Calendly !== 'undefined') {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jwdcreativehouse/30min?hide_gdpr_banner=1',
        parentElement: document.getElementById('booking'),
        prefill: {},
        utm: {},
      });
    }
  }, [widgetLoaded]);

  return (
    <div className={style.main} id="booking"></div>
  );
}

export default Consultation;