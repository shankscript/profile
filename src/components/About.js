import React from 'react';

const About = props => {
    return (
      <section className="about">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
        <div dangerouslySetInnerHTML={{__html:props.aboutData}}></div>
      </section>
    );
};

export default About;



/** WEBPACK FOOTER **
 ** ./src/components/About.js
 **/