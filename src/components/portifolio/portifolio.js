import React, {useEffect} from 'react';
import './portifolio.css'

import appnews from '../../assets/portfolioimages/appdenoticias.png'
import exercisetracker from '../../assets/portfolioimages/exercisetracker .png'
import netflixclone from '../../assets/portfolioimages/netflixclone.png'
import simpleroomchat from '../../assets/portfolioimages/simpleroomchat.png'
import webportiolio from '../../assets/portfolioimages/webportiolio.png'
import wordrank from '../../assets/portfolioimages/wordrank.png'

const Portifolio = () => {
    
    const portfolioDataArray = [
        {   
            id:1,
            src: netflixclone,
            title: "Netflix Clone",
            hrefGitHub: "https://github.com/rniochy/netflix_clone",
            hrefDeploy: "#"
        },
        {
            id:2,
            src: wordrank,
            title: "World Rank",
            hrefGitHub: "https://github.com/rniochy/Ranking-mundial" ,
            hrefDeploy: "#" ,
        },
        {
            id:3,
            src: appnews,
            title: "App of News",
            hrefGitHub: "https://github.com/rniochy/nextjs_news_app" ,
            hrefDeploy: "#" ,
        },
        {
            id:4,
            src: exercisetracker,
            title: "Exercise Tracker",
            hrefGitHub: "https://github.com/rniochy/exercise-tracker-with-mern-satck" ,
            hrefDeploy: "#" ,
        },
        {
            id:5,
            src: simpleroomchat ,
            title: "Simple realtime chat room ",
            hrefGitHub: "https://github.com/rniochy/landing-page-reactjs-profile" ,
            hrefDeploy: "#",
        },
        {
            id:6,
            src: webportiolio ,
            title: "Web Portfolio",
            hrefGitHub: "https://github.com/rniochy/landing-page-reactjs-profile" ,
            hrefDeploy: "#" ,
        }
    ];

    const ArticlePortifolio = ({id, src, title, hrefGitHub, hrefDeploy}) => {
       return <article className="portifolio_item"    >
           <div className="portifolio_item-image">
                 <img src = {src} alt= {title} />
           </div>        
           <h3>{title}</h3>
           <div className="portifolio_item-image-cta">
                <a href={hrefGitHub} className="btn" target="_blank">Github</a>
                <a href= {hrefDeploy} className="btn btn-primary" target="_blank">See the deploy</a>

           </div>
       </article>
    
    }

    return (
        <section id="portifolio">
            <h5>My recent work</h5>
            <h2>Portifolio</h2>

            <div className="container portifolio_container">
               {
                    portfolioDataArray.map(({id, src, title, hrefGitHub, hrefDeploy})=>( 
                         <ArticlePortifolio key={id}
                         src={src} 
                         title={title} 
                         hrefGitHub ={hrefGitHub} 
                         hrefDeploy={hrefDeploy}/>
                         ))
               }
            </div>            
        </section>
    );
}

export default Portifolio;
