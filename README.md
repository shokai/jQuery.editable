jQuery.editable plugin
======================
Edit in place plugin for jQuery

DEMO
----
[http://dev.shokai.org/js/jquery-editable/](http://dev.shokai.org/js/jquery-editable/)


DOWNLOAD
--------
[jquery.editable.js](https://raw.github.com/shokai/jQuery.editable/master/jquery.editable.js)


SYNOPSIS
--------

Load jquery.editable.js

    <script src='jquery.js' type='text/javascript'></script>
    <script src='jquery.editable.js' type='text/javascript'></script>


Make editable

    $('span#edit').editable('click', function(e){
      alert(e.value);
    });


Double click

    $('span#edit').editable('dblclick', function(e){
      alert(e.old_value + ' : ' + e.value);
    });


Click hold

    $('span#edit').editable('clickhold', function(e){
      alert(e.value);
    });


Edit with Button

    var option = {trigger : $('input.btn_edit'), action : 'click'};
    $('span#edit').editable(option, function(e){
      alert(e.value);
    });


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
