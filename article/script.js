document.addEventListener("load",()=>{
const url = new URL(location.href)
const pageNumber =url.searchParams.get("p")

if(pageNumber === null){
    location.href = "https://blog.webfullsympathy.com"
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
    // 記事内容
    fetch("https://raw.githubusercontent.com/webfullsympathy/blog.webfullsympathy.com/refs/heads/doc/" + pageNumber + "/main.md")
    .then(response => response.text())
    .then(data => {
        document.getElementById("main").innerHTML = marked.parse(data);
        hljs.highlightAll()

        document.getElementById("main").style.display = "block";
        document.getElementById("main").style.border = "1px #eee solid";
        document.getElementById("main").style.borderRadius = "30px";
        document.getElementById("main").style.background = "#fff";
    })

    fetch("https://raw.githubusercontent.com/webfullsympathy/blog.webfullsympathy.com/refs/heads/doc/" + pageNumber + "/set.txt")
    .then(response => response.text())
    .then(data => {
        const data_list = data.split(/\n/)

        document.title = data_list[0] + " | ウェブ完理ブログ"
    })
}

doc()
})