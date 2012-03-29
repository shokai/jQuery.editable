// jquery.editable.js
// (c) 2012 Sho Hashimoto <hashimoto@shokai.org>
// https://github.com/shokai/jQuery.editable

(function($){
    $.fn.editable = function(event, callback){
        if(typeof callback != 'function') callback = function(arg){};
        if(typeof event == "string"){
            var trigger = this;
            var action = event;
        }
        else{
            var trigger = event.trigger;
            var action = event.action;
        }

        var target = this;
        var edit_start = function(){
            trigger.unbind(action);
            if(trigger != target) trigger.hide();
            var old_value = target.text().replace(/^\s+/,'').replace(/\s+$/,'');
            var input = $('<input>').val(old_value).attr('id','editable_'+(new Date()*1)).addClass('editable');
            var finish = function(){
                var res = input.val().replace(/^\s+/,'').replace(/\s+$/,'');
                target.html(res);
                callback({value : res, target : target, old_value : old_value});
                trigger.bind(action, edit_start);
                if(trigger != target) trigger.show();
            };

            input.blur(finish);
            input.keydown(function(e){
                if(e.keyCode == 13) finish();
            });

            target.html(input);
            input.focus();
        };

        trigger.bind(action, edit_start);
    };
})(jQuery);