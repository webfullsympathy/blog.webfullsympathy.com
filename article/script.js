const url = new URL(location.href)
const pageNumber =url.searchParams.get("p")

if(pageNumber === null){
    location.href = "https://blog.webfullsympathy.com"
}

function doc(){
    try{
    // 記事詳細
    fetch("https://raw.githubusercontent.com/webfullsympathy/blog.webfullsympathy.com/refs/heads/doc/" + pageNumber + "/set.txt")
    .then(response => response.text())
    .then(data => {
        const data_list = data.split(/\n/)

        document.title = data_list[0] + " | ウェブ完理ブログ"
    })

    // 記事内容
    fetch("https://raw.githubusercontent.com/webfullsympathy/blog.webfullsympathy.com/refs/heads/doc/" + pageNumber + "/main.md")
    .then(response => response.text())
    .then(data => {
        if(data === "404: Not Found"){
            document.getElementById("main").innerHTML = "<h1>お探しのページが見つかりませんでした。</h1><br><a href='https://blog.webfullsympathy.com'><p>ホームに戻る</p></a>"
            hljs.highlightAll()

            document.getElementById("main").style.display = "block"
            document.getElementById("main").style.margin = "0 auto"
            document.getElementById("main").style.border = "1px #eee solid"
            document.getElementById("main").style.borderRadius = "30px"
            document.getElementById("main").style.background = "#fff"
            document.getElementById("main").style.width = "80%"
        }else{
            document.getElementById("main").innerHTML = marked.parse(data) + "<br><a href='https://share-tool.net?text=" + document.title + " - " + location.href + "' target='_blank'><img src='https://share-tool.net/src/share.jpg' style='border-radius: 100%;width: 200px'></a>"
            hljs.highlightAll()

            document.getElementById("main").style.display = "block"
            document.getElementById("main").style.margin = "0 auto"
            document.getElementById("main").style.border = "1px #eee solid"
            document.getElementById("main").style.borderRadius = "30px"
            document.getElementById("main").style.background = "#fff"
            document.getElementById("main").style.width = "80%"
        }
    })
    }
    catch{
    void(0)
    }
}

doc()