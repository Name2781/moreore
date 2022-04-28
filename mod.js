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

  dragElement(document.getElementById("modMenuDiv"));
  // $('.modMenuDiv').resizable();
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
