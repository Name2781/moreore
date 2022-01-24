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
  h.id = "modMenu"; 
  h.class="modMenu";
  h.innerHTML = html;
  document.body.appendChild(h);   
  dragElement(document.getElementById('modMenu'));

  var c = document.createElement('link');
  c.rel = 'stylesheet';
  c.media = 'all';
  c.href = 'https://name2781.github.io/moreore/test.css';
  c.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(c); 
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
