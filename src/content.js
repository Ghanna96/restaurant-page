const content= document.querySelector('#content');


const appendToContent=(element)=>{
    content.appendChild(element);
};

const purgeContent=()=>{
    while (content.firstChild) {    
        content.removeChild(content.firstChild);
    }
}

const appendHome= ()=>{
    let el= `<div class="wlcm">
            <h2>MOROCCAN RESTAURANT</h2>
            <p>Experience healthy and tasty dishes</p>
            </div>`;
    let home= document.createElement('div');
    home.innerHTML=el;
    content.appendChild(home);
};
export {appendHome,appendToContent,purgeContent}



