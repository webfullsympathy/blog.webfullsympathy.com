const url = new URL(location.href)
const pageNumber =url.searchParams.get("p")

function doc_close() {
    document.getElementById("doc-view").style.display = "none"
}

/* 記事画面
function data_fetch() {
    fetch("https://raw.githubusercontent.com/webfullsympathy/sharetool-doc/refs/heads/doc/all.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("doc-all").innerHTML = data.replace(/\n/g,"<br>")
    })
}
data_fetch()
*/

function doc(){
    fetch("https://raw.githubusercontent.com/webfullsympathy/blog.webfullsympathy.com/refs/heads/doc/" + pageNumber + "/main.md")
    .then(response => response.text())
    .then(data => {
        document.getElementById("main").innerHTML = marked.parse(data) + "<br><button onclick='doc_close()' style='background-color: #1F2937;color: #ffffff;font-size: 140%;'>閉じる</button>";
        hljs.highlightAll()

        document.getElementById("doc-view").style.display = "block";
        document.getElementById("doc-view").style.border = "1px #eee solid";
        document.getElementById("doc-view").style.borderradius = "1px #eee solid";
        document.getElementById("doc-view").style.background = "#fff";
    })
}

doc()