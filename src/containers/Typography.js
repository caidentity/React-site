import React, { Component } from "react";

import typelinelengthbody from '../assets/images/type-linelengthbody.png';
import typelinelengthsmall from '../assets/images/type-linelengthshort.png';

class Typography extends Component {
  render() {
    return (
      <div className="content">
        {/* CONTENT HEADER */}
        <div className="contentHeader">
          <h2>Typography</h2>
          <p>Our typography is a visual expression of our voice. Our typefaces build a level of visual texture that adds warmth and depth to our words, helping content come alive in a way that is warm and welcoming, reliable, and fresh.</p>
        </div>
        <h4>Typefaces</h4>
        <p>We use sans-serif fonts for most of our type, the exception being when you want to display code then you should defer to monospace fonts.</p>
        {/* GUIDELINE SECTION */}
        <h2>Guidelines</h2>
        <h4>Minimum Sizing</h4>
        <p>For mobile the smallest a font should be is 14px</p>
        <p>For desktop smallest a font should be is 11px</p>
        <h4>Line Length</h4>
        <p>Set the reading environment to suit the reader. Wide lines of text are difficult to read and make it harder for people to focus. While there is no right way to measure the perfect width for text, a good goal is to aim for between 60 and 100 characters per line including spacing. Setting an optimal line length will break up content into easily digestible information.</p>
        <p>The optimal line length for your body text is considered to be 50-60 characters per line, including spaces (“Typographie”, E. Ruder). Other sources suggest that up to 75 characters is acceptable.</p>
        <img src={typelinelengthbody}  width={800} alt="Logo" />
        <img src={typelinelengthsmall}  width={800} alt="Logo" />
        <h4>Truncation</h4>
        <p>Depending on context truncation differs. For example notebook names tend to be tad shorter so truncation could be sooner, but for note titles that are more perscriptice need to show as much content as possible</p>
        <h4>Line breaking</h4>
        <p> when dealing with wrapping text, Avoid leaving large gaps and orphans on a line. Try not to leave very short words such as prepositions at the end of a line. Well-considered line breaks can avoid hyphenation of words altogether.</p>
      </div>
    );
  }
}

export default Typography;
