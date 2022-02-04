import MainModule from './modules/main.module';
import { createStyle } from './utils/utils';
import styles from './index.scss';

(function () {
    const mainModule = new MainModule();
    createStyle(mainModule.container, styles);
})();
