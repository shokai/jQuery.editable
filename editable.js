
(function($){
     $.fn.editable = function(event, callback){
         if(typeof callback != 'function') callback = function(arg){};

         var that = this;
         var edit_start = function(){
             that.unbind(event);
             var input = $('<input>').
                 attr('id','editable_'+(new Date()*1)).
                 addClass('editable').
                 val( that.html().replace(/^\s+/,'').replace(/\s+$/,'') );
             
             var finish = function(){
                 var res = input.val().replace(/^\s+/,'').replace(/\s+$/,'');
                 that.html(res);
                 that.bind(event, edit_start);
                 callback({value : res, target : that});
             }
             
             input.keydown(
                 function(e){
                     if(e.keyCode == 13){
                         finish();
                     }
                 }
             );

             that.html(input);
             input.focus();
             input.blur(finish);
         };
         
         that.bind(event, edit_start);
     };
 })(jQuery);