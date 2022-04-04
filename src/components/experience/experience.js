import React from 'react';
import './experience.css'

const Experience = () => {
    return (
            <section id="experience" className="experience">
                    <h5>What Skill I Have</h5>
                    <h2>My experience</h2>

                    <div className="container container_experience">
                          <div className="experience_frontend">
                              <h3>Frontend Development</h3>
                              <div className="experience_content">
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}

                                    </article>
                              </div>
                          </div>
                    </div>

            </section>
    );
}

export default Experience;
