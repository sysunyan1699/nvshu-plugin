// 监听插件图标点击事件
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["nvshu.js"]
    });
  });