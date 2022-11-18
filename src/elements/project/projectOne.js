import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Projectcard from "./projectcard";

const ProjectOne = () => {
    const ProjectData = useStaticQuery(graphql`
        query ProjectDataQuery {
            allProjectJson(limit: 7) {
                edges {
                    node {
                        id
                        title
                        category
                        featured_image {
                            childImageSharp {
                                fluid(maxWidth: 1060, maxHeight: 600, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                    presentationWidth
                                    presentationHeight
                                }
                            }
                        }
                    }
                }
            }
        }
    `);
    const projectsData = ProjectData.allProjectJson.edges;
    console.log(projectsData,'yo')
    return (
        <div className="row row--25">
            {projectsData.map( data => (
                <Projectcard key={data.node.id}
                    column="col-lg-4 col-md-6 col-12"
                    portfolioStyle="portfolio-style-1"
                   
                    id={data.node.id}
                    image={data.node.featured_image.childImageSharp}
                    title={data.node.title}
                    category={data.node.category}
                />
            ))}
        </div>
    )
}

export default ProjectOne;