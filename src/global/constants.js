const ACTIONS = [];

const PartsEnum = {
    Menu: 'menu',
    Sidebar: 'sidebar',
    Footer: 'footer'
};

const PARTS = [
    { id: 1, action: 'create', name: PartsEnum.Menu },
    { id: 2, action: 'create', name: PartsEnum.Sidebar },
    { id: 3, action: 'create', name: PartsEnum.Footer }
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
