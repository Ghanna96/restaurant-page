import {appendToContent} from './content';

const contact=()=>{
    let d= document.createElement('div');
    let h2= document.createElement('h2');
    let p= document.createElement('p');
    h2.textContent=" Contact us ";
    p.textContent= 'Phone Number: 123 456 6789  E-Mail:restaurant@example.com';
    d.appendChild(h2);
    d.appendChild(p);
    d.style.cssText= 'position: relative; top: 20%; font-size: 30px; color: #fff;';
    appendToContent(d);
}

export {contact};