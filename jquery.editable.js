// jquery.editable.js
// (c) 2012 Sho Hashimoto <hashimoto@shokai.org>
// https://github.com/shokai/jQuery.editable

(function($){
     $.fn.editable = function(event, callback){
         if(typeof callback != 'function') callback = function(arg){};

         var that = this;
         var edit_start = function(){
             that.unbind(event);
             var old_value = that.html().replace(/^\s+/,'').replace(/\s+$/,'');
             var input = $('<input>').
                 attr('id','editable_'+(new Date()*1)).
                 addClass('editable').
                 val( old_value );
             var finish = function(){
                 var res = input.val().replace(/^\s+/,'').replace(/\s+$/,'');
                 that.html(res);
                 that.bind(event, edit_start);
                 callback({value : res, target : that, oldValue : old_value});
             }
             
             input.blur(finish);
             input.keydown(
                 function(e){
                     if(e.keyCode == 13){
                         finish();
                     }
                 }
             );

             that.html(input);
             input.focus();
         };
         
         that.bind(event, edit_start);
     };
 })(jQuery);