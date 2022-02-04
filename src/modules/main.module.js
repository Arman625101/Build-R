import { BaseModule } from '../global/Base.module';
import BuildrModule from './buildr/buildr.module';

export default class MainModule extends BaseModule {
    constructor() {
        super();
        const buildrModule = new BuildrModule();
    }
}
