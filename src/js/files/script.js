// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//переключение
const chooseColor = document.querySelectorAll('.choose__color-btn');
const contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function (e) {
    e.addEventListener('click', open)
});

function open(e) {
    const target = e.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach(function (item) {
        item.classList.remove('choose__color-btn_active')
    })
    target.classList.add('choose__color-btn_active')

    contentItem.forEach(function (item) {
        item.classList.remove('content-item_active')
    });

    contentActive.forEach(function (item) {
        item.classList.add('content-item_active')
    })
}