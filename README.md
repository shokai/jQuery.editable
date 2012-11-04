jQuery.editable plugin
======================
Edit in place plugin for jQuery

* http://shokai.github.com/jQuery.editable/


SYNOPSIS
--------

Load jquery.editable.js

````html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.editable.js" type="text/javascript"></script>
````

Make editable

````javascript
$("span#edit").editable("click", function(e){
  alert(e.value);
});
````

Double click

````javascript
$("span#edit").editable("dblclick", function(e){
  alert(e.old_value + " : " + e.value);
});
````

Click hold

````javascript
$("span#edit").editable("clickhold", function(e){
  alert(e.value);
});
````


Edit with Button

````javascript
var option = {trigger : $("input.btn_edit"), action : "click"};
$("span#edit").editable(option, function(e){
  alert(e.value);
});
````

Validate
````javascript
$("span#zip").editable("click", function(e){
  if( !e.value.match(/^\d{3}\-\d{4}$/) ){
    $("span#zip").html(e.old_value);
    alert(e.value + " is not valid zip-code");
  }
});
````

LICENSE
=======
(The MIT License)

Copyright (c) 2012 Sho Hashimoto

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
