function data_fetch() {
    try{
    fetch("https://raw.githubusercontent.com/webfullsympathy/sharetool-doc/refs/heads/doc/all.html")
    .then(response => response.text())
    .then(data => {
        if(data === "404: Not Found"){
            document.getElementById("doc-all").innerHTML = "<h1>記事が見つかりませんでした</h1>"

            document.getElementById("doc-all").style.display = "block"
            document.getElementById("doc-all").style.margin = "0 auto"
            document.getElementById("doc-all").style.border = "1px #eee solid"
            document.getElementById("doc-all").style.borderRadius = "30px"
            document.getElementById("doc-all").style.background = "#fff"
            document.getElementById("doc-all").style.width = "80%"
        }else{
            document.getElementById("doc-all").innerHTML = data.replace(/\n/g,"<br>")

            document.getElementById("doc-all").style.display = "block"
            document.getElementById("doc-all").style.margin = "0 auto"
            document.getElementById("doc-all").style.border = "1px #eee solid"
            document.getElementById("doc-all").style.borderRadius = "30px"
            document.getElementById("doc-all").style.background = "#fff"
            document.getElementById("doc-all").style.width = "80%"
        }
    })
    }catch{
        void(0)
    }
}

data_fetch()