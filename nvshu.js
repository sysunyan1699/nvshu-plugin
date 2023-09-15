var nvshuStorageURL = "YOUR_PATH";
var nvshuFontFactURL = "url(" + nvshuStorageURL +")";
var nvshuFontStyleId = "nvshuFontStyle";

function isNvshuFontLoaded() {
    return document.getElementById(nvshuFontStyleId);
}

function appendNvshuLoadedTag() {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = nvshuStorageURL;
    fontLink.id = nvshuFontStyleId;
    document.head.appendChild(fontLink);
}

function applyNvshuFontToTextElements() {
    const textElements = document.querySelectorAll('[id^=text-inner]');
    textElements.forEach((element) => {
        element.style.fontFamily = "nvshufont";
    });
}


if (!isNvshuFontLoaded()) {
    const font = new FontFace('nvshufont', nvshuFontFactURL, {});
    font.load()
        .then((loadedFont) => {
            document.fonts.add(loadedFont);
            console.log('字体加载完成，可以使用了！');
            appendNvshuLoadedTag();
            applyNvshuFontToTextElements();
        })
        .catch((error) => {
            console.error('字体加载失败：', error);
        });
} else {
    console.log("字体已经加载，无需重复加载");
    applyNvshuFontToTextElements();
}

