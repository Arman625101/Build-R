import BuildrModule from './modules/buildr/buildr.module';
import { createStyle } from './utils/utils';

import style from './index.scss';

const app = function () {
    const container = document.getElementById('container');
    const buildr = new BuildrModule();
    
    container.append(createStyle(style));
    container.appendChild(buildr.render());
};

app();
