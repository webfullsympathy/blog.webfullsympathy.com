function data_fetch() {
    fetch("https://raw.githubusercontent.com/webfullsympathy/sharetool-doc/refs/heads/doc/all.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("doc-all").innerHTML = data.replace(/\n/g,"<br>")
    })
}

data_fetch()