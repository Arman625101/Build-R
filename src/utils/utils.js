const createStyle = (container, style) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    container.append(styleElement);
};

// TODO: Function which creating automatically dom with emmet;
export { createStyle };
