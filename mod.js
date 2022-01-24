function onLoad() {
  var html = '<div id="modMenu">';
  html += '  <div id="modMenuHeader">Click here to move</div>';
  html += '  <p>Move</p>';
  html += '  <p>this</p>';
  html += '  <p>DIV</p>';
  html += '</div>';

  // Create the root div element for the popup
  var h = document.createElement("div");
  h.id = "modMenuDiv"; 
  h.class="modMenuDiv";
  h.innerHTML = html;
  document.body.appendChild(h);   

  var c = document.createElement('link');
  c.rel = 'stylesheet';
  c.media = 'all';
  c.href = 'https://name2781.github.io/moreore/test.css';
  c.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(c);
  var b = document.createElement('link');
  b.rel = 'stylesheet';
  b.media = 'all';
  b.href = 'code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css';
  b.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(b);
  $('.modMenuDiv').draggable();
  // $('.modMenuDiv').resizable();
}
