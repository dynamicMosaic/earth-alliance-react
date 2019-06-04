import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const CurrentProjects = [
  {
    title: "Bay Area Clean Climbers",
    description: "Promoting Ethical Outdoor Climbing",
    icon: 'fas fa-seedling'
   
},
{
    title: "Globaly Connected",
    description: "United to Save the Earth",
    icon: 'fas fa-globe'
   
  },
  {
    title: "Water Guardians",
    description: (
      <span>
        The <i className="fas fa-heart" /> to Our Ecosystems is Water
      </span>
    ),
    icon: 'fas fa-tint'
    
  },
  {
    title: "Education",
    description: "Supporting Environmental Awareness Through Activity",
    icon: 'fas fa-leaf'
    
  }
];
const ProjectsSections = () => (
  <ScrollableAnchor id="projects">
    <section className="content-section bg-primary text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-0">Projects</h3>
          <h2 className="mb-5">What We are Doing</h2>
        </div>
        <div className="row">
          {CurrentProjects.map((project, index) => (
            <div
              className="col-lg-3 col-md-6 mb-5 mb-lg-0"
              key={`service_${index}`}
            >
              <span className="project-icon rounded-circle mx-auto mb-3">
                <i className={project.icon} />
               
              </span>
              <h4>
                <strong>{project.title}</strong>
              </h4>
              <p className="text-faded mb-0">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);
export default ProjectsSections;
