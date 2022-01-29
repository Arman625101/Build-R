import { makeSingleTone } from '../../utils/utils';
import { PartsFactory } from './parts.factory';

export default class PartsModule {
    constructor() {
        // makeSingleTone.call(this, PartsModule);
    }
    static render(part) {
        // TODO: Dynamic function to dynamically append new parts to container in right position
        const container = document.getElementById('container');
        const createdPart = PartsFactory.createPart(part);

        container.prepend(createdPart);
    }
}
