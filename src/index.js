import {appendHome,purgeContent} from './content';
import {renderMenu} from './menu';
import {contact} from './contact';
//render navigation tabs
(function(){    
    let tabs= ` <ul class="tabs  primary-nav">
    <li class="tabs__item">
        <span class="tabs__link">Home</span>
    </li>
    <li class="tabs__item">
        <span class="tabs__link">Menu</span>
    </li>
    <li class="tabs__item">
        <span class="tabs__link">Contact</span>
    </li>
    </ul>`;
    document.querySelector('#content').classList.add('home');
    let divTab= document.createElement('div');
    divTab.innerHTML= tabs;
    // document.body.insertBefore(divTab,document.body.firstChild);
    document.body.prepend(divTab);
})();

(function(){
    //add event listeners
    let tabs= document.querySelectorAll('.tabs__link');
    tabs[0].addEventListener('click',()=>{
        purgeContent();
        appendHome();
    });
    tabs[1].addEventListener('click',()=>{
        purgeContent();
        renderMenu();
    });
    tabs[2].addEventListener('click',()=>{
        purgeContent();
        contact();
    });

})();



appendHome();
