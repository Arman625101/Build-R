import { makeSingleTone } from '../../utils/utils';
import PartsModule from '../parts/parts.module';
import { BuildrComponent } from './components/buildr.component';

export default class BuildrModule {
    constructor() {
        makeSingleTone.call(this, BuildrModule);
    }

    render() {
        customElements.define('build-r', BuildrComponent);
        const buildr = document.createElement('build-r');

        buildr.addEventListener('partsClickEvent', this.handleClick);
        
        return buildr;
    }

    handleClick(event) {
        const clickedPart = event.detail;
        PartsModule.render(clickedPart);
    }
}
