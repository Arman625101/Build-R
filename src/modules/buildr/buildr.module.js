import PartsModule from '../parts/parts.module';
import { BuildrComponent } from './components/buildr.component';

export default class BuildrModule {
    constructor() {}

    static render(container) {
        customElements.define('build-r', BuildrComponent);
        const buildr = document.createElement('build-r');

        buildr.addEventListener('partsClickEvent', ({ detail }) => {
            PartsModule.render(container, detail);
        });

        container.append(buildr);
    }
}
