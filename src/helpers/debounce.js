export function debounce(callback, ms) {

    let isCooldown = false;
    let timeout;

    return function(...args) {
        const finishCooldown = () => {
            isCooldown = false;
            callback(...args);
        };

        if (isCooldown) {
            clearTimeout(timeout);
            timeout = setTimeout(finishCooldown, ms);
            return
        }

        callback(...args);
        isCooldown = true;
        timeout = setTimeout(finishCooldown, ms);
    };

}