export class Part extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('click', ({ target }) => {
            // TODO: Handle Part click and open editing mode
            console.log('WOOOW', target);
        });
    }
}
