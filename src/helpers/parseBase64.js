export const parseBase64 = (base64) => {
    const [info, link] = base64.split(',');

    return {
        link,
        extension: info.split(/[\\/;]/)[1],
    }
};