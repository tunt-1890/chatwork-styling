var checkbox = document.getElementById('chx');
checkbox.addEventListener('change', function () {
    if (this.checked) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const payload = {
              val: true
            }
            chrome.tabs.sendMessage(tabs[0].id, payload);
        });
    } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const payload = {
              val: false
            }
            chrome.tabs.sendMessage(tabs[0].id, payload);
        });
    }
});