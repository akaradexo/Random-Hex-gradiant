{/* <p id="text">Hello</p>
<button onclick="copyToClipboard('#text')"></button> */}

function copyToClipboard(element) {
  var temp = ("<input>");
  ("body").append(temp);
  temp.val((element).text()).select();
  document.execCommand("copy");
  temp.remove();
}