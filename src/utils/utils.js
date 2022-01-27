export const createStyle = (style) => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = style;
    return styleElement;
};
