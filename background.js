// background.js

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details.url.includes("search?")) {
      // Display the alert message
      alert("You are in focus mode");

      // Redirect to the home page
      chrome.tabs.update(details.tabId, { url: "https://www.example.com" }); // Replace with your desired home page URL
    }
  },
  { urls: ["*://www.google.com/*"] }, // Adjust the URL pattern as per your requirement
  ["blocking"]
);

chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);
    chrome.storage.local;
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});
