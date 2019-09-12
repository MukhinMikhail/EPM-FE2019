function Api() {
    this.connectionRequest = function(url) {
        const xhr = new XMLHttpRequest();
        xhr.open('get', url, true)
        xhr.send();
        xhr.onreadystatechange = function(e) {
            if (xhr.readyState === 4) {
                if (xhr.status != 200) {
                    console.log(xhr.status + ': ' + xhr.statusText);
                } else {
                    console.log(JSON.parse(xhr.responseText))
                    return JSON.parse(xhr.responseText)
                }
            }
        }
    }
}