var toggle = false;

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
        code: toggle
            ? "document.body.classList.add('my-invert')"
            : "document.body.classList.remove('my-invert')",
    });
    toggle = !toggle;
});
