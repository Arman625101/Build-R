import BuildrModule from './modules/buildr/buildr.module';
import { createStyle } from './utils/utils';

import styles from './index.scss';

(function () {
    const container = document.getElementById('container');
    createStyle(container, styles);

    BuildrModule.render(container);
})();
