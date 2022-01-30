import { MenuItems } from '../../../../global/constants';
import { createStyle } from '../../../../utils/utils';
import { Part } from '../abstract/part';
import styles from './menu.styles.scss';

export class MenuComponent extends Part {
    #list = MenuItems;
    constructor() {
        super();
    }
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        super.connectedCallback();
        this.shadowRoot.appendChild(createStyle(styles));

        const header = document.createElement('header');

        const left = document.createElement('div');
        const right = document.createElement('div');
        const list = document.createElement('ul');
        const logo = document.createElement('logo');
        logo.innerText = 'LOGO';

        for (const { id, name } of this.#list) {
            const li = document.createElement('li');
            li.id = id;
            li.innerText = name;
            list.appendChild(li);
        }

        left.classList.add('left');
        right.classList.add('right');
        left.appendChild(logo);
        right.appendChild(list);
        header.appendChild(left);
        header.appendChild(right);
        header.classList.add('editable');

        this.shadowRoot.appendChild(header);
    }
}
