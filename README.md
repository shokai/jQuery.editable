jQuery.editable plugin
======================
Edit in place plugin for jQuery


Demo
----
- http://shokai.github.io/jQuery.editable/


Download
--------
- [jQuery.editable.js](https://raw.github.com/shokai/jQuery.editable/master/jquery.editable.js)
- [jQuery.editable.min.js](https://raw.github.com/shokai/jQuery.editable/master/jquery.editable.min.js)

Via bower:
```bash
bower install jQuery.editable
```

SYNOPSIS
--------

Load jquery.editable.js

````html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="jquery.editable.min.js"></script>
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
var option = {trigger: $("input.btn_edit"), action: "click"};
$("span#edit").editable(option, function(e){
  alert(e.value);
});
````

Validate
````javascript
$("span#zip").editable("click", function(e){
  if( !e.value.match(/^\d{3}\-\d{4}$/) ){
    e.target.html(e.old_value);
    alert(e.value + " is not valid zip-code");
  }
});
````

TextArea Tag
```javascript
var option = {type: "textarea", action: "click"};
$("div#sandbox").editable(option, function(e){
  console.log(e.value);
});
```


Build
-----

edit "HEADER.txt"

    % npm install -g uglify-js
    % make build

=> jquery.editable.js
