
{/* <p id="sample">Hello World</p>

The following link copies the text within the specified element (in this sample the paragraph with id="sample") to the clipboard:

<a href="#" onclick="CopyToClipboard('sample');return false;">Copy Text</a> */}


function CopyToClipboard(id)
{
var r = document.createRange();
r.selectNode(document.getElementById(id));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
window.getSelection().removeAllRanges();
}
