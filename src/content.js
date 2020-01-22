//functions that manage the DOM in content
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
    let el= `
            <h2>MOROCCAN RESTAURANT</h2>
            <p>Experience the mediterranean cuisine</p>
            `;
    let home= document.createElement('div');
    home.innerHTML=el;
    home.classList.add('wlcm');
    appendToContent(home);
};
export {appendHome,appendToContent,purgeContent}



