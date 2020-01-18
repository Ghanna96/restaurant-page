import {appendHome,appendToContent} from './content';
import {renderMenu} from './menu';
appendHome();

(function(){
    let d= document.createElement('div');
    d.id='menu';
    appendToContent(d);
    document.querySelector('#content').classList.add('home');
})();

renderMenu('Couscous','Classic moroccan dish with vegetables and meat','Cous Cous');