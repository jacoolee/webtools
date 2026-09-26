browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (!changeInfo.url)
        return;

    const url = changeInfo.url;

    if (url === "about:blank")
        return;

    const tabs = await browser.tabs.query({});

    for (const other of tabs) {
        if (other.id === tabId)
            continue;

        if (other.url === url) {
            await browser.tabs.remove(tabId);

            await browser.tabs.update(other.id, {
                active: true
            });

            await browser.windows.update(other.windowId, {
                focused: true
            });

            break;
        }
    }
});
