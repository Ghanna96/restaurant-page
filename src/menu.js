import {appendToContent} from './content';


const renderCard=(imName,text,title)=>{
    let card= document.createElement('div');
    let img = document.createElement("IMG");
    let h2= document.createElement("h2");
    let p = document.createElement('p');
    h2.textContent=title;
    p.textContent=text;
    img.setAttribute("src",`../src/img/${imName}.jpg`);
    img.setAttribute("width", "100%");
    img.setAttribute("height", "70%");
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.classList.add('card');
    document.querySelector('#menu').appendChild(card);
}

const renderMenu= ()=>{
    let d= document.createElement('div');
    d.id='menu';
    d.style.cssText='margin: 3rem;display: grid;position: relative;top: 10%;gap: 5%;height: 80%;grid-template-columns: repeat(3, 25%);grid-template-rows: repeat(2, 350px);justify-content: center;';
    appendToContent(d);
    renderCard('Couscous','','Cous Cous');
    renderCard('Tajine','','Tajine');
    renderCard('Pastillas','','Pastilla');
    renderCard('Harira','','Harira Soup');
    renderCard('rfissa','','Rfissa');
    renderCard('Zaalouk','','Zaalouk Salad');
}
export {renderMenu};
//  <div >
//   <div class="card">
//   <img src="../src/img/Couscous.jpg" alt="Avatar" style="width:100%">
//             <h2>CousCous</h2>
//             <p>Experience healthy and tasty dishes</p>
//   </div>
// </div> 

