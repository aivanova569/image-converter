export const loadingImg = (callback) => (files) => {

    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = () => {
            callback(img);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(files[0])
};