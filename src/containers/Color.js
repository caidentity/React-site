import React, { Component } from "react";

import colorprimaryuse from '../assets/images/color-primaryuse.png';
import colorvisualuse from '../assets/images/color-visualuse.png';
import coloracess from '../assets/images/color-access.png';
import colorexamplered from '../assets/images/color-example-red.png';
import colorexampleorange from '../assets/images/color-example-orange.png';
import colorexampleblue from '../assets/images/color-example-blue.png';
import colorexampleyellow from '../assets/images/color-example-yellow.png';

class Color extends Component {
  render() {
    return (
      <div className="content">
        {/* CONTENT HEADER */}
        <div className="contentHeader">
          <h2>Color</h2>
          <p>Color plays an important role in supporting the message wishing to get across as well as supporting visual hierarchy.</p>
        </div>
        {/* GUIDELINE SECTION */}
        <h2>Guidelines</h2>
        <p>Color plays an important role in supporting the message wishing to get across as well as supporting visual hierarchy. When using color make sure to follow these set of guidelines in order to ensure consistency across our product.</p>
        <h4>Use of Primary Colors</h4>
        <p>Green is the primary color for Evernote. It is used strategically to call attention to elements on a page, and not used in large fields. </p>
        <p>Light gray complements the green and occupies larger areas in a design. It plays an important role as a background in our photography system and has an essential role in information hierarchies in marketing and product UI.</p>
        <img src={colorprimaryuse}  width={800} alt="Logo" />
        <h4>Visual Heiarchy</h4>
        <p>Color is used sparingly to draw attention to important elements and those that we want the user to take action on. Because most of the application is gray, pops of color catch a user’s eye.</p>
        <img src={colorvisualuse}  width={800} alt="Logo" />
        <h4>Accessibility</h4>
        <p>It’s important for Evernote to meet all web accessibility standards, including the minimum contrast ratios that the WCAG 2.0 specifies for text and background colors according to their AA level.</p>
        <img src={coloracess}  width={800} alt="Logo" />
        {/* EXAMPLE SECTION */}
        <h2>Examples of Use</h2>
        <h4>Red</h4>
        <p>Red is used to draw attention towards elements and notifications that require critical attention. Seeing this color can feel stressful to users. Use it sparingly. Examples of this in use are our paywalls and failed states.</p>
        <img src={colorexamplered}  width={800} alt="Logo" />
        <h4>Orange</h4>
        <p>Orange is used to draw attention to content that may be of interest, such as upgrade moments. Examples of this in use is our upgrade entrypoints</p>
        <img src={colorexampleorange}  width={800} alt="Logo" />
        <h4>Yellow</h4>
        <p>Yellow is used to draw attention to content that requires action, but is low priority. Example of this in use is our quota speed bumps.</p>
        <img src={colorexampleyellow}  width={800} alt="Logo" />
        <h4>Blue</h4>
        <p>Blue is primarily used to bring attention to a element or communicate a message. Examples where this is used are popovers, banners, badges, ect.</p>
        <img src={colorexampleblue}  width={800} alt="Logo" />
      </div>
    );
  }
}

export default Color;
