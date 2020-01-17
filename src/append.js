const content= document.querySelector('#content');

const appendHome= ()=>{
    let el=  `<div class="wlcm">
            <h2>MOROCCAN RESTAURANT</h2>
            <p>Experience healthy and tasty dishes</p>
            </div>`;
    let home= document.createElement('div');
    home.innerHTML=el;
    home.id= 'home';
    content.appendChild(home);
}
export {appendHome}



