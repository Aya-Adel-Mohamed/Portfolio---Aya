import React from 'react'
// import styles from './PortfolioCard.module.css'
import movie from '../../assets/imgs/movie.png';
import meals from '../../assets/imgs/meals.png';
import bakery from '../../assets/imgs/bakery.png';
import Bookmarker from '../../assets/imgs/Bookmarker.png';
import crud from '../../assets/imgs/crud.png';
import Daniels from '../../assets/imgs/DANIELS.png';
import Devfolio from '../../assets/imgs/Devfolio.png';
import fokir from '../../assets/imgs/fokir.png';
import simone from '../../assets/imgs/simone.png';
import smartlogin from '../../assets/imgs/smart login system.png';
import wheather from '../../assets/imgs/wheather.png';
import start from '../../assets/imgs/start react theme.png';
import game from '../../assets/imgs/game.jpeg';
import noxe from '../../assets/imgs/noxe.jpg';
import notes from '../../assets/imgs/notes.png';
import ecommerce from '../../assets/imgs/ecommerce.png';
import quiz from '../../assets/imgs/quiz.png';
import Card from '../Card/Card.jsx'

const PortfolioCard = ({name}) => {
  console.log(name)
        const projects = [
        {title:'E-Commerce', image: ecommerce,skillBadge:'React JS',skillBadge_2:'Redux',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS', skill_6:'Redux',liveDemo:'https://aya-adel-mohamed.github.io/E-Commerce/',Github:'https://github.com/Aya-Adel-Mohamed/E-Commerce'},
        {title:'Notes App', image: notes,skillBadge:'React JS',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://aya-adel-mohamed.github.io/Notes-APP/',Github:'https://github.com/Aya-Adel-Mohamed/Notes-APP'},
        {title:'Game Over', image: game,skillBadge:'React JS',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://aya-adel-mohamed.github.io/Game-Over/',Github:'https://github.com/Aya-Adel-Mohamed/Game-Over'},
        {title:'Noxe Movies', image: noxe,skillBadge:'React JS',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:'https://aya-adel-mohamed.github.io/React-Movies/',Github:'https://github.com/Aya-Adel-Mohamed/React-Movies'},
        {title:'Start React', image: start,skillBadge:'React JS',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'React JS',liveDemo:' https://aya-adel-mohamed.github.io/start-react-theme/',Github:'https://github.com/Aya-Adel-Mohamed/start-react-theme'},
        {title:'Movies-Api Site', image: movie,skillBadge:'jQuery',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://aya-adel-mohamed.github.io/Movie-Api/',Github:'https://github.com/Aya-Adel-Mohamed/Movie-Api'},
        {title:'Meals-Api Site', image: meals,skillBadge:'jQuery', skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'JQUERY',liveDemo:'https://aya-adel-mohamed.github.io/meals-app-api/',Github:'https://github.com/Aya-Adel-Mohamed/meals-app-api'},
        {title:'Quiz App', image: quiz,skillBadge:'JavaScript',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',skill_5:'OPP',liveDemo:'https://aya-adel-mohamed.github.io/Quiz-App/',Github:'https://github.com/Aya-Adel-Mohamed/Quiz-App'},
        {title:'wheather Site', image: wheather,skillBadge:'JavaScript', skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/Weather-App/',Github:'https://github.com/Aya-Adel-Mohamed/Weather-App'},
        {title:'Login Form', image: smartlogin, skillBadge:'JavaScript',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/login-form/',Github:'https://github.com/Aya-Adel-Mohamed/login-form'},
        {title:'Crud-App Site', image: crud,skillBadge:'JavaScript', skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/crud-application/',Github:'https://github.com/Aya-Adel-Mohamed/crud-application'},
        {title:'Bookmarker Site', image: Bookmarker,skillBadge:'JavaScript', skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',skill_4:'JAVASCRIPT',liveDemo:'https://aya-adel-mohamed.github.io/Bookmarker',Github:'https://github.com/Aya-Adel-Mohamed/Bookmarker'},
        {title:'Devfolio Site', image: Devfolio, skillBadge:'BootStrap',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',liveDemo:'https://aya-adel-mohamed.github.io/Bootstrap-Project/',Github:'https://github.com/Aya-Adel-Mohamed/Bootstrap-Project'},
        {title:'Daniels Site', image: Daniels, skillBadge:'BootStrap',skill_1:'HTML5',skill_2:'CSS3',skill_3:'BOOTSTRAP5',liveDemo:'https://aya-adel-mohamed.github.io/Daniels/',Github:'https://github.com/Aya-Adel-Mohamed/Daniels'},
        {title:'Simone Site', image: simone,skillBadge:'HTML & CSS', skill_1:'HTML5',skill_2:'CSS3',liveDemo:'https://aya-adel-mohamed.github.io/Simone/',Github:'https://github.com/Aya-Adel-Mohamed/Simone'},
        {title:'Fokir Site', image: fokir,skillBadge:'HTML & CSS', skill_1:'HTML5',skill_2:'CSS3',liveDemo:'https://aya-adel-mohamed.github.io/Fokir/',Github:'https://github.com/Aya-Adel-Mohamed/Fokir'},
        {title:'Family Bakery Site', image: bakery,skillBadge:'HTML & CSS', skill_1:'HTML5',skill_2:'CSS3',liveDemo:'https://aya-adel-mohamed.github.io/Bakery/',Github:'https://github.com/Aya-Adel-Mohamed/Bakery'},
    ];
    return ( 
        <>
       <div className="d-flex flex-wrap justify-content-center align-items-center">
       {name === 'jQuery'?<>{projects?.map((ele,index)=><Card data={ele} key={index}/> ).slice(5,7)}</>
       :name === 'JavaScript'?<>{projects?.map((ele,index)=><Card data={ele} key={index}/>).slice(7,12)}</>
       :name === 'Bootstrap'?<>{projects?.map((ele,index)=><Card data={ele} key={index}/>).slice(12,14)}</>
       :name === 'HTML & CSS'?<>{projects?.map((ele,index)=><Card data={ele} key={index}/>).slice(14,17)}</>
       :<>{projects?.map((ele,index)=><Card data={ele} key={index}/>).slice(0,5)}</>
       }
       </div>
        </>
     );
}
 
export default PortfolioCard;