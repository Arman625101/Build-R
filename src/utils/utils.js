const createStyle = (container, style) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    container.append(styleElement);
};

// TODO: Function which creating automatically dom with emmet;
const htmlToDOM = (html) => {
    const pattern = /(\w+|>|\*|.)/g;
    let dom = {};
    let isId = false;
    let isStyle = false;
    let toAppend = false;
    let mainElement;
    let innerElement;
    html.match(pattern).forEach((token, i) => {
        if (token === '>') {
            toAppend = true;
            return;
        } else if (token === '*') {
            return;
        } else if (token === '#') {
            isId = true;
            return;
        } else if (Number(token)) {
            return;
        } else if (token === '.') {
            isStyle = true;
        } else {
            // just ccreate part
            if (isStyle) {
                console.log(innerElement);
                (innerElement || mainElement).classList.add(token);
            } else if (isId) {
                (innerElement || mainElement).id = token;
            } else if (toAppend) {
                const element = document.createElement(token);
                mainElement.appendChild(element);
                innerElement = element;
            } else {
                mainElement = document.createElement(token);
            }

            isStyle = false;
            toAppend = false;
        }
    });
    console.log(mainElement);
};

htmlToDOM('ul.list>li#a');

export { createStyle, htmlToDOM };
