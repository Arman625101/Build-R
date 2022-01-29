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

export { PARTS, ACTIONS, PartsEnum };
