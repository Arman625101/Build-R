import BuildrModule from './modules/buildr/buildr.module';
import { createStyle } from './utils/utils';

import style from './index.scss';

(function () {
    const container = document.getElementById('container');
    container.append(createStyle(style));

    BuildrModule.render();
})();
