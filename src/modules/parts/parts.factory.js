import { PartsEnum } from '../../global/constants';
import { MenuComponent } from './components/menu/menu.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

export class PartsFactory {
    constructor() {}
    static createPart(part) {
        switch (part.name) {
            case PartsEnum.Menu:
                customElements.define('menu-r', MenuComponent);
                return document.createElement('menu-r');
            case PartsEnum.Footer:
                customElements.define('footer-r', FooterComponent);
                return document.createElement('footer-r');
            case PartsEnum.Sidebar:
                customElements.define('sidebar-r', SideBarComponent);
                return document.createElement('sidebar-r');
            default:
                break;
        }
    }
}
