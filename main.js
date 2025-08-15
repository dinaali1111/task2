

function display() {
    var output = document.getElementById("output");
    var div = document.getElementsByTagName("div");
    var className = document.getElementsByClassName("content");
    var names = document.getElementsByName("choose");
    var ids = document.querySelectorAll("[id]");

    var nameNum = names.length;
    var divNum = div.length;
    var classNum = className.length;
    var idNum = ids.length;

    output.innerHTML = `count div: <div>: ${divNum} <br>
                        class contant: 'content': ${classNum} <br>
                     Name : 'name': ${nameNum} <br>
                        ID:  'id': ${idNum}`;
}
function display() {
   const output = document.getElementById("output");
   const divs = document.getElementsByTagName("div");
   const classNames = document.getElementsByClassName("content");
   const names = document.getElementsByName("choose");
   const ids = document.querySelectorAll("[id]");

   // Build rich HTML output
   let details = `<ul style="list-style:none;padding:0;margin:0;">`;
   details += `<li><i class='fa-solid fa-code'></i> <b>عدد عناصر &lt;div&gt;:</b> <span style='color:#764ba2;'>${divs.length}</span></li>`;
   details += `<li><i class='fa-solid fa-layer-group'></i> <b>عدد العناصر ذات الكلاس 'content':</b> <span style='color:#43cea2;'>${classNames.length}</span></li>`;
   details += `<li><i class='fa-solid fa-signature'></i> <b>عدد العناصر ذات الاسم 'choose':</b> <span style='color:#185a9d;'>${names.length}</span></li>`;
   details += `<li><i class='fa-solid fa-hashtag'></i> <b>عدد العناصر التي لديها خاصية id:</b> <span style='color:#f7797d;'>${ids.length}</span></li>`;
   details += `</ul>`;

   // Animate output
   output.style.opacity = 0;
   setTimeout(() => {
      output.innerHTML = details + `<hr style='margin:10px 0;border:0;border-top:1px dashed #764ba2;'>` +
         `<div style='font-size:0.95rem;color:#888;'>${new Date().toLocaleString('ar-EG', { dateStyle: 'full', timeStyle: 'short' })}</div>`;
      output.style.transition = "opacity 0.7s";
      output.style.opacity = 1;
   }, 250);
}


