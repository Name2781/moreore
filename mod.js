function onLoad() {
  alert("loaded!")
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
  
  var cssId = 'modCss';  // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId))
  {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = cssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://name2781.github.io/moreore/test.css';
      link.media = 'all';
      head.appendChild(link);
  }
  
  var newCssId = 'jquery-ui';  // you could encode the css path itself to generate id..
  if (!document.getElementById(newCssId))
  {
      var head  = document.getElementsByTagName('head')[0];
      var link  = document.createElement('link');
      link.id   = newCssId;
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = 'code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css';
      link.media = 'all';
      head.appendChild(link);
  }

  $('.modMenuDiv').draggable();
  // $('.modMenuDiv').resizable();
}
