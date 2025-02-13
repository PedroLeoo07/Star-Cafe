class MenuList {
    constructor() {
        this.menu = [];
    }
    getAllMenu(){
        return this.menu;
    }
    addMenu(menu){
        this.menu.push(menu);
    }
}

module.exports = MenuList;