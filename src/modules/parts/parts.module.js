import { makeSingleTone } from '../../utils/utils';
import { PartsFactory } from './parts.factory';

export default class PartsModule {
    constructor() {
        makeSingleTone.call(this, PartsModule);
    }
    static render(part) {
        const factory = PartsFactory;
        const container = document.getElementById('container');
        const newPart = factory.createPart(part);

        container.prepend(newPart);
    }
}
