

// const clickTabs= ()=>{
//     let tabs= document.querySelectorAll('.tabs__link');

// }

const renderMenu=(imName,text,title)=>{
    let card= document.createElement('div');
    let img = document.createElement("IMG");
    let h2= document.createElement("h2");
    let p = document.createElement('p');
    h2.textContent=title;
    p.textContent=text;
    img.setAttribute("src",`../src/img/${imName}.jpg`);
    img.setAttribute("width", "100%");
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.classList.add('card');
    document.querySelector('#menu').appendChild(card);
}

export {renderMenu};
//  <div >
//   <div class="card">
//   <img src="../src/img/Couscous.jpg" alt="Avatar" style="width:100%">
//             <h2>CousCous</h2>
//             <p>Experience healthy and tasty dishes</p>
//   </div>
// </div> 