<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/vnd.microsoft.icon" href="https://webfullsympathy.com/profile.jpg">

    <title>
        <!--PHPでタイトルを設定-->
        <?php
        if (isset($_GET["p"])) {
            $url = "https://raw.githubusercontent.com/webfullsympathy/blog.webfullsympathy.com/refs/heads/doc/" . $_GET["p"] . "/set.txt";
            $contents = file_get_contents($url);

            if ($contents !== false) {
                $lines = explode(PHP_EOL, $contents);
    
                if (isset($lines[0])) {
                    echo $lines[0] . " | ウェブ完理ブログ";
                } else {
                    echo "404 Not Found | ウェブ完理ブログ";
                }
            } else {
                echo "404 Not Found | ウェブ完理ブログ";
            }
        } else {
            echo "404 Not Found | ウェブ完理ブログ";
        }
        ?>
    </title>

    <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/marked-highlight/lib/index.umd.js"></script>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/monokai-sublime.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>

    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
</head>
<body>
    <img src="https://webfullsympathy.com/profile.jpg" id="profileimg">
    <h1 id="penname">ウェブ完理</h1>
    <div id="main" style="display: none;"></div>
    <script src="script.js"></script>
</body>
</html>