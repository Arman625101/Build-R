import BuildR from './modules/buildr/buildr.module';
import { PartFactory } from './modules/parts/parts.factory';
import { createStyle } from './utils/utils';

import style from './index.scss';

const app = function () {
    const container = document.getElementById('container');
    container.append(createStyle(style));

    const buildr = new BuildR();
    new PartFactory();

    container.appendChild(buildr.render());
};

app();
