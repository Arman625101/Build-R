const createStyle = (style) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    return styleElement;
};

function makeSingleTone(newClass) {
    if (!newClass.instance) {
        newClass.instance = this;
    }
    return newClass.instance;
}

// TODO: Function which creating automatically dom with emmet;

export { createStyle, makeSingleTone };
