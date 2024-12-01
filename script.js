function data_fetch() {
    try{
    fetch("https://raw.githubusercontent.com/webfullsympathy/blog.webfullsympathy.com/refs/heads/doc/all.html")
    .then(response => response.text())
    .then(data => {
        if(data === "404: Not Found"){
            document.getElementById("doc-all").innerHTML = "<h1>記事が見つかりませんでした</h1>"
        }else{
            document.getElementById("doc-all").innerHTML = data.replace(/\n/g,"<br>")
        }
    })
    }catch{
        void(0)
    }
}

data_fetch()

/*635より小さいとモバイル*/