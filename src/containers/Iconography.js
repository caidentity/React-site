import React, { Component } from "react";

import iconsolidhollow from '../assets/images/icon-solidhollow.png';
import icongrid from '../assets/images/icon-grid.png';


class Iconography extends Component {
  render() {
    return (
      <div className="content">
        {/* CONTENT HEADER */}
        <div className="contentHeader">
          <h2>Iconography</h2>
          <p>Icons are visual representations of commands, files, devices, directories, or common actions and are used to provide visual context and enhance usability. They should be simple, yet bold enough to grab attention, and leave a lasting impression.</p>
        </div>
        {/* BREAKDOWN SECTION */}
        <h4>Grid</h4>
        <p>Icons should be designed on both a 24px and a 16px grid (both on a 24px artboard) to accommodate both regular and small icons in applications.</p>
        <img src={icongrid}  width={800} alt="Logo" />
        <h4>Angles</h4>
        <p>When creating shapes like arrows or when you need more real estate, use angles that are 45 ̊ or 90 ̊. When more subtlety is required, use 30 ̊ or 60 ̊ angles.</p>
        <h4>Stroke</h4>
        <p>When designing for regular icons “24px” use 1.5px stroke, while for small icons “16px” use a 1px stroke</p>
        <h4>Sizing</h4>
        <p>Across all platforms we have various sizes to consider based on real estate and standard practices each platform considers</p>
        {/* GUIDELINE SECTION */}
        <h2>Guidelines</h2>
        <h4>Solid vs Hollow Icons</h4>
        <p>Solid icons are seen as the high-level or primary interaction points
        for Evernote. They are used to define the core experiences of Evernote.
        Examples include notes, notebook, spaces, business view, etc… </p>
        <p>Hollow icons are used to define the secondary interaction points in
        Evernote. They tend to look more complex than solid icons but they offer
        less visual noise overtime (blend in to the background more easily than solids)
        and provide a subtle visual clue as opposed to solid icons which may seem more “in your face”. </p>
        <img src={iconsolidhollow}  width={800} alt="Logo" />
      </div>
    );
  }
}

export default Iconography;
