import { saveAs } from 'file-saver';
import JSZip from 'jszip';

export const downloadImages = (files, name) => {
    const zip = new JSZip();
    const folder = zip.folder('images');

    files.forEach((file) => {
        folder.file(file.name, file.src, {base64: true});
    });

    zip.generateAsync({type:"blob"})
        .then(function(content){saveAs(content, name)});
};