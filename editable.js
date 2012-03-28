
(function($){
     $.fn.editable = function(callback){
         if(typeof callback != 'function') callback = function(arg){};

         var strip = function(str){
             return str.replace(/^[ 　\t]+/,'').replace(/[ 　\t]+$/,'');
         };

         var that = this;
         var edit_start = function(){
             that.unbind('dblclick');
             var input = $('<input>').
                 attr('id','editable_'+(new Date()*1)).
                 addClass('editable').
                 val( strip(that.html().toString()) );
             
             var finish = function(){
                 var res = strip(input.val());
                 that.html(res);
                 that.bind('dblclick', edit_start);
                 callback({value : res, target : that});
             }
             
             input.keydown(
                 function(e){
                     if(e.keyCode == 13){
                         finish();
                     }
                 }
             );
             that.die();
             that.html(input);
         };
         
         that.bind('dblclick', edit_start);
     };
 })(jQuery);