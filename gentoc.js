const HEADER_TAGNAMES = ['H1','H2','H3','H4','H5','H6']
var headers = [], idx = 0, id = null
for (i of document.body.children) {
    idx += 1
    var header = null
    var index = HEADER_TAGNAMES.indexOf(i.tagName)
    if (index !== -1) {
        id = i.id || idx
        if (!i.id) i.setAttribute('id', id)
        header = { 'indent': index, 'id': id, 'textContent': i.textContent, }
        headers.push(header)
    }
}
toc = document.createElement('div')
toc.className = 'toc'
headers.forEach((i,idx)=> {
    toc_item = document.createElement('div')
    toc_item.className = `toc-item toc-item--indent-${i.indent}`
    toc_item.textContent = i.textContent
    toc_item.id = i.id
    toc_item.onclick = () => {
        document.getElementById(i.id).scrollIntoView({'behavior': 'smooth'})
    }
    toc.append(toc_item)
})

document.getElementsByTagName('html')[0].append(toc)

const css=`
html {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    overflow-y: hidden;
}
body {
    flex: 1;
    height: 100%;
    overflow: auto;
    padding: 0 20px 0 20px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
}
.toc {
    width: 250px;
    padding: 10px 0;
    height: calc(100% - 2*20px);
    overflow: auto;
}
.toc-item {
    font-size: 15px;
    padding: 0px 10px 0px 10px;
    cursor: default;
    line-height: 25px;
}
.toc-item:hover {
    background-color: #e5e5e5;
}
.toc-item--indent-0 {
    font-weight: 900;
}
.toc-item--indent-1 {
    padding-left: 15px;
}
.toc-item--indent-2 {
    padding-left: 30px;
}
.toc-item--indent-3 {
    padding-left: 45px;
}
.toc-item--indent-4 {
    padding-left: 60px;
}
.toc-item--indent-5 {
    padding-left: 75px;
}
.toc-item--indent-6 {
    padding-left: 90px;
}
`
const style = document.createElement('style')
style.textContent = css
document.getElementsByTagName('head')[0].append(style)
