/** Hover effect based on Manuela Ilic Exploring Animations for Menu Hover Effects
 https://tympanus.net/codrops/2020/07/08/exploring-animations-for-menu-hover-effects/
 */

import MenuItem from './menuItem.js';

export default class Menu {

    constructor(el) {
        //console.log('menu');
        // el is the menu element (<nav>)
        this.DOM = {el: el};
        // the menu item elements (<a>)
        this.DOM.menuItems = this.DOM.el.querySelectorAll('.project__list__item');
        // menu item properties that will animate as we move the mouse around the menu
        // we will be using interpolation to achieve smooth animations.
        // the “previous” and “current” values are the values to interpolate.
        // the value applied to the element, this case the image element (this.DOM.reveal) will be a value between these two values at a specific increment.
        // the amt is the amount to interpolate.
        this.animatableProperties = {
            // translationX
            tx: {previous: 0, current: 0, amt: 0.08},
            // translationY
            ty: {previous: 0, current: 0, amt: 0.08},
            // Rotation angle
            rotation: {previous: 0, current: 0, amt: 0.08},
            // CSS filter (brightness) value
        };
        // array of MenuItem instances
        this.menuItems = [];
        const images =document.querySelectorAll('.ghost--image');
        //console.log(images);
        // initialize the MenuItems
        [...this.DOM.menuItems].forEach((item, pos) => this.menuItems.push(new MenuItem(item, pos, this.animatableProperties, images)));
        // show the menu items (initial animation where each menu item gets revealed)
        //this.showMenuItems();
    }
    // initial animation for revealing the menu items
    // showMenuItems() {
    // 	console.log('sho');
    //     gsap.to(this.menuItems.map(item => item.DOM.textInner), {
    //         duration: 1.2,
    //         ease: 'Expo.easeOut',
    //         startAt: {y: '100%'},
    //         y: 0,
    //         delay: pos => pos*0.06
    //     });
    // }
}