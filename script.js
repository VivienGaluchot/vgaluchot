const local = (() => {
    return {
        installTypingAnimation(element) {
            let text = element.innerHTML;

            function typing(text, index) {
                hider = (_, i) => i == 0 ? '_' : '&nbsp;';
                return text.slice(0, index) + Array.from(text.slice(index)).map(hider).join('');
            };
            element.innerHTML = typing(text, 0)

            let i = 0;
            function update() {
                element.innerHTML = typing(text, i);
                i++;
                if (i > text.length)
                    return;
                window.setTimeout(update, 10 + 200 * Math.random());
            };

            window.setTimeout(update, 1000);
        }
    };
})();

window.addEventListener("DOMContentLoaded", (event) => {
    for (let el of document.getElementsByClassName("quote")) {
        local.installTypingAnimation(el);
    }
});