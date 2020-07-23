import React from 'react';
import ReactDom from "react-dom";

import './index.css'

const Person =({img,name,job,children})=>{
const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
return(
  <article className="person">
    <img src={url} alt="srk"/>
     <h4>{name}</h4>
    <h4>{job}</h4>
    {children}
  </article>

);
};
const PersonList =() => {
   return (
    <section className="Person-list">
     <Person img="34" name ="Samran" job="develper"/>
     <Person img="22" name ="AHMAD" job="programmer"><p>Hello</p></Person>
     <Person img="56" name ="Imran" job="web master"/>
    </section>
 )
};


ReactDom.render(<PersonList/>,document.getElementById('root'))
