import { BaseModule } from '../../global/Base.module';
import PartsModule from '../parts/parts.module';
import { BuildrComponent } from './components/buildr.component';

export default class BuildrModule extends BaseModule {
    constructor() {
        super();
        this.render();
    }

    render() {
        const buildr = this.defineElement('build-r', BuildrComponent);
        buildr.addEventListener('partsClickEvent', this.handlePartClick);

        this.container.append(buildr);
    }

    handlePartClick({ detail }) {
        const partsModule = new PartsModule();
        partsModule.renderPart(detail);
    }
}
