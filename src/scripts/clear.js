// authors: Shu, Michael, Emily, Aaron - clearing the dom on reload


const clear = () => {
    const container = document.querySelector(".div--container");
    while (container.firstElementChild){
        container.removeChild(container.firstElementChild);
    };
};

module.exports = clear;