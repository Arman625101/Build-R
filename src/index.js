import BuildR from './modules/buildr/buildr.module';
import { createStyle } from './utils/utils';

import style from './index.scss';

const app = function () {
    const container = document.getElementById('container');
    container.append(createStyle(style));

    const buildr = new BuildR();
    container.appendChild(buildr.render());
};

app();
