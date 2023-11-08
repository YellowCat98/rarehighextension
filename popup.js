document.getElementById("openLink").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: "http://rarehighwebsite.7m.pl" }); // Replace "https://example.com" with your desired link
    });
  });
  document.getElementById("openrarechannel").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: "https://youtube.com/@SupernovaGD1" }); // Replace "https://example.com" with your desired link
    });
  });
  