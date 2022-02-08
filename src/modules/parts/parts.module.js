import { BaseModule } from '../../global/Base.module';

export default class PartsModule extends BaseModule {
    constructor() {
        super();
        if (!PartsModule.instance) {
            PartsModule.instance = this;
        } else {
            return PartsModule.instance;
        }
    }

    renderPart({ tagName, component, id: newOrder }) {
        const newElem = this.defineElement(tagName, component);
        newElem.setAttribute('order', newOrder);

        const childElements = [].slice
            .call(this.container.querySelectorAll('[order]'))
            .sort((a, b) => a.getAttribute('order') - b.getAttribute('order'));
        this.renderInRightOrder(childElements, newElem);
    }

    renderInRightOrder(childElements, newElem) {
        if (childElements.length) {
            const newOrder = newElem.getAttribute('order');

            childElements.some((elem, i) => {
                const order = elem.getAttribute('order');
                if (newOrder < order) {
                    elem.before(newElem);
                    return true;
                } else {
                    childElements.shift();
                    if (childElements.length) {
                        this.renderInRightOrder(childElements, newElem);
                    } else {
                        elem.after(newElem);
                        return true;
                    }
                }
            });
        } else {
            this.container.appendChild(newElem);
        }
    }
}
