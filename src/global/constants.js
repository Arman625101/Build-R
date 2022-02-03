import { FooterComponent } from '../modules/parts/components/footer/footer.component';
import { MenuComponent } from '../modules/parts/components/menu/menu.component';
import { SideBarComponent } from '../modules/parts/components/sidebar/sidebar.component';

const ACTIONS = [];

const PartsEnum = {
    Menu: 'menu',
    Sidebar: 'sidebar',
    Footer: 'footer'
};

const PARTS = [
    {
        id: 1,
        action: 'create',
        name: PartsEnum.Menu,
        tagName: 'menu-r',
        component: MenuComponent
    },
    {
        id: 2,
        action: 'create',
        name: PartsEnum.Sidebar,
        tagName: 'sidebar-r',
        component: SideBarComponent
    },
    {
        id: 3,
        action: 'create',
        name: PartsEnum.Footer,
        tagName: 'footer-r',
        component: FooterComponent
    }
];

const EditItems = [
    {
        id: 1,
        name: 'color'
    },
    {
        id: 2,
        name: 'background'
    },
    {
        id: 3,
        name: 'padding'
    }
];

const MenuItems = [
    {
        id: 1,
        name: 'home'
    },
    {
        id: 2,
        name: 'about'
    },
    {
        id: 3,
        name: 'contact'
    }
];

export { PARTS, ACTIONS, PartsEnum, EditItems, MenuItems };
