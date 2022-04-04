import React from 'react';
import './experience.css'

const Experience = () => {
    return (
            <section id="experience" className="experience">
                    <h5>What Skill I Have</h5>
                    <h2>My experience</h2>

                    <div className="container container_experience">
                        {/* Frontend Development */}
                          <div className="experience_frontend">
                              <h3>Frontend Development</h3>
                              <div className="experience_content">
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                       <div>
                                            <h4>HTML</h4>
                                            <small className="text-right">Experienced</small>
                                       </div> 
                                    </article>
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                        <div>
                                            <h4>CSS</h4>
                                            <small className="text-right">Experienced</small>
                                        </div>
                                    </article>
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                            <div>
                                                 <h4>Javascript</h4>
                                                 <small className="text-right">Experienced</small>   
                                            </div>
                                    </article>
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                        <div>
                                                <h4>React</h4>
                                                <small className="text-right">Experienced</small>
                                        </div>
                                    </article>
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                        <div>
                                            <h4>NextJs</h4>
                                            <small className="text-right">Experienced</small>
                                        </div>
                                    </article>
                              </div>
                          </div>
                            {/* Backend Development */}
                          <div className="experience_backend">
                              <h3>Backend Development</h3>
                              <div className="experience_content">
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                        <div>
                                            <h4>Node</h4>
                                            <small className="text-right">Experienced</small>
                                        </div>
                                    </article>        
                                    <article className="experience_details">            
                                        {/* Add ICON HERE */}
                                        <div>
                                            <h4>MySQL</h4>
                                            <small className="text-right">Experienced</small>
                                        </div>
                                        
                                    </article>
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                        <div>
                                            <h4>Postgres</h4>
                                            <small className="text-right">Experienced</small>
                                        </div>
                                    </article>
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                        <div>
                                            <h4>MongoDB</h4>
                                            <small className="text-right">Experienced</small>
                                        </div>
                                    </article>
                                    <article className="experience_details">
                                        {/* Add ICON HERE */}
                                        <div>
                                            <h4>Java</h4>
                                            <small className="text-right">Experienced</small>
                                        </div>
                                    </article>
                              </div>
                          </div>
                    </div>

            </section>
    );
}

export default Experience;
