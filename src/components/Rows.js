import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';

class Rows extends Component {
  render() {
    const { navActivated,
      aboutActivated, projectsActivated,
      contactActivated, activateAbout,
      activateProjects, activateContact, activateHome } = this.props;
    return (
      <section className='Rows'>

        <section className={`row row-1 ${aboutActivated ? 'row-active' : 'About-inactive'} ${(projectsActivated || contactActivated ) ? 'hide-row' : ''}`}>
          { (projectsActivated || contactActivated) ? null :
            <About
              aboutActivated={aboutActivated}
              activateAbout={activateAbout}
              activateHome={activateHome}
            />
          }
        </section>

        <section className={`row row-2 ${projectsActivated ? 'row-active' : 'Projects-inactive'} ${(aboutActivated || contactActivated ) ? 'hide-row' : ''}`}
          onClick={() => {activateProjects()}}>
          { (aboutActivated || contactActivated) ? null :
            <h1>PROJECTS</h1>
          }
          {/* <Projects
            projectsActivated={projectsActivated}
            activateProjects={activateProjects}
          /> */}
        </section>

        <section className={`row row-3 ${contactActivated ? 'row-active' : 'Contact-inactive'} ${(aboutActivated || projectsActivated ) ? 'hide-row' : ''}`}
          onClick={() => {activateContact()}}>
          { (aboutActivated || projectsActivated) ? null :
            <h1>CONTACT</h1>
          }
          {/* <Contact
            contactActivated={contactActivated}
            activateContact={activateContact}
          /> */}
        </section>
      </section>
    );
  }
}

export default Rows;
