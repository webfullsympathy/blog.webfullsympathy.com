var highlight = function(code, lang, callback){
    if (lang) {
        return hljs.highlight(code, {language: lang, ignoreIllegals: true}).value;
    } else {
        return hljs.highlightAuto(code).value;
    }
}

var renderer = new marked.Renderer();
renderer.code = function(code, fileInfo, escaped) {
    if (!fileInfo) {
        fileInfo = '';
    }
    var info = fileInfo.split(':');
    langs = hljs.listLanguages();
    // hljsの対応言語に含まれていなければファイル名とする
    if (!langs.includes(info[0])) {
        var fileName = info[0];
    } else {
        var lang = info[0];
        var fileName = info[1];
    }
    var fileTag = '';
    if (fileName) {
        fileTag = '<span class="filename">'+fileName+'</span>'
    }
    if (this.options.highlight) {
        var out = this.options.highlight(code, lang);
        if (out != null && out !== code) {
            escaped = true;
            code = out;
        }
    }
    if (!lang) {
        return '<pre>'+fileTag+'<code>' + (escaped === false ? escape(code, true) : code) + '\n</code></pre>';
    }
    
    return '<pre>'+fileTag+'<code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped === false ? escape(code, true) : code) + '\n</code></pre>\n';
};

marked.setOptions({
    renderer: renderer,
    highlight: highlight
});