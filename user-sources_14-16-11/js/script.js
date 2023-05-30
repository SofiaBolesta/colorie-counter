import Counter from './modules/counter.js';

const counterElement = document.querySelectorAll('.counter');

counterElements.forEach((elements) => {
    const counter = new Counter(element);
    counter.init();
});