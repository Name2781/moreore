function onLoad() {
  var html = '';
  html += '<div id="modMenu">';
  html += '  <div id="modMenuHeader">Click here to move</div>';
  html += '  <p>Move</p>';
  html += '  <p>this</p>';
  html += '  <p>DIV</p>';
  html += '</div>';
  html += ';

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
  $('.modMenuDiv').draggable();
  alert("worked");
}
