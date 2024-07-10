import React from 'react';

const data = [
    {
        "image": "",
        "name": "React JS",
        "description": "Developed a web application using React JS",
        "url": ""
    },
    {

    }
]

const Projects = () => {
  return (
    <div>
      
    </div>
  )
}

const Project= ({image, name, description, url}) => {
    return (
        <div>
            <div><img src={image} alt={name} /></div>
            <h2>{name}</h2>
            <p>{description}</p>
            <button>
                <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
            </button>
        </div>
    )
    }
export default Projects
