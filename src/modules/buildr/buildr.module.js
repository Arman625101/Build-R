import { makeSingleTone } from '../../utils/utils';
import PartsModule from '../parts/parts.module';
import { BuildrComponent } from './components/buildr.component';

export default class BuildrModule {
    constructor() {
        // makeSingleTone.call(this, BuildrModule);
    }

    static render() {
        customElements.define('build-r', BuildrComponent);
        const container = document.getElementById('container');
        const buildr = document.createElement('build-r');

        buildr.addEventListener('partsClickEvent', ({ detail }) => {
            PartsModule.render(detail);
        });

        container.append(buildr);
    }
}
