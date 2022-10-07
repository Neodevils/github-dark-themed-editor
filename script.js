(async ({ chrome, netscape }) => {

  const { default: HighlightedCode } =
  await import("https://unpkg.com/highlighted-code@0.3.7/min.js");

  HighlightedCode.useTheme('github-dark');
})(self);

function openEditor(evt, editorName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(editorName).style.display = "block";
  evt.currentTarget.className += " active";
}
