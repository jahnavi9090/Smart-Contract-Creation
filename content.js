const tweetUrl = window.location.href;
console.log('Current Tweet URL:', tweetUrl);

chrome.storage.local.set({ tweetUrl });
