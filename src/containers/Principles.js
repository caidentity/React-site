import React, { Component } from "react";

class Principles extends Component {
  render() {
    return (
      <div className="content">
        {/* CONTENT HEADER */}
        <div className="contentHeader">
          <h2>Principles</h2>
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
        {/* Principles */}
        <p>These principles describe our ambition for a delightful and consistent Evernote experience, from the home to all of the clients. This is meant to guide our visual design, interaction patterns, illustrations, and even product decisions. Note: These are not ordered by priority; when you begin a project you should consider which principle is most important for your objectives and optimize for that, just making sure you dont violate any of the others.</p>
        <h4>Spacious</h4>
        <p>Evernote inspires a sense of calm and clear-headedness. The visual experience is uncluttered and well organized. There is always plenty of space for people to imagine themselves into.</p>
        <h4>Inviting</h4>
        <p>Anyone who shows up at our front door is welcome. We are inclusive and embracing all type of people, from all over the world. We provide easy entry points and support our users throughout their journey.</p>
        <h4>Efficient</h4>
        <p>We optimize for productivity. Interactions and workflows are intuitive and consistent, requiring minimal cognition. Every detail is carefully considered and anything that does not serve a clear purpose is removed.</p>
        <h4>Delightful</h4>
        <p>Evernote is vibrant with creativity and possibility. If we can delight you in any way, without distracting or annoying you, we will do so.</p>
      </div>
    );
  }
}

export default Principles;
