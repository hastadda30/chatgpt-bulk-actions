chrome.runtime.onMessage.addListener((msg, sender, respond) => {
    if (msg.type === 'show-notification') {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon/bulk-actions.png',
            title: `ChatGPT Bulk Actions`,
            message: msg.message
        });
    }
});
