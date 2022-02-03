import { PartsFactory } from './parts.factory';

export default class PartsModule {
    constructor() {}

    static render(container, part) {
        // TODO: Dynamic function to dynamically append new parts to container in right position
        console.log(container.childNodes);
        const newPart = this.createPart(part);
        // const iterator = ;
        // console.log(iterator.next().value.getAttribute('order'));
        // console.log(iterator.next().value.getAttribute('order'));
        for (const node of container.childNodes.values()) {
            const order = node.getAttribute('order');
            if (part.id < order) {
                container.insertBefore(newPart, node);
                return;
            } else {
                node.after(newPart);
                return;
            }
        }
        //     console.log(part.id, order);
        // }
        // container.prepend(newPart);
    }

    static createPart({ tagName, component, id }) {
        customElements.define(tagName, component);
        const elem = document.createElement(tagName);
        elem.setAttribute('order', id);
        return elem;
    }

    // static render(container, { tagName, component }) {

    // }
}
