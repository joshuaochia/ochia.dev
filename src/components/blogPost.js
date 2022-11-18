import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Blog from "./blog";


const BlogPost = () => {
    const blogQueryData = useStaticQuery(graphql`
        query BlogListQuery {
            allMarkdownRemark (limit: 5, sort: {order: ASC, fields: frontmatter___date}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        excerpt(pruneLength: 83, format: PLAIN, truncate: true)
                        frontmatter {
                            author {
                                name
                            }
                            title
                            postnumber
                            date(formatString: "MMM Do, YYYY")
                            format
                            category
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 120, maxHeight: 100, quality: 100) {
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
        }
    `);
    const blogs = blogQueryData.allMarkdownRemark.edges;

    return (
        <div className="rn-post-area rn-section-gap" id="news">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span className="subtitle">Blog / Journal</span>
                            <h3 className="title">Read cool stuff about design</h3>
                        </div>
                    </div>
                </div>
                
                <div className="row row--25">
                    {blogs.map(blog => (
                        <div className="col-lg-12 col-md-12 col-12" key={blog.node.fields.slug}>
                            <Blog
                                image={blog.node.frontmatter.image.childImageSharp.fluid}
                                title={blog.node.frontmatter.title}
                                postnumber={blog.node.frontmatter.postnumber}
                                date={blog.node.frontmatter.date}
                                category={blog.node.frontmatter.category}
                                author={blog.node.frontmatter.author.name}
                                path={blog.node.fields.slug}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPost;
