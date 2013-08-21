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
    var edit = {};

    edit.start = function(e){
      trigger.unbind(action == 'clickhold' ? 'mousedown' : action);
      if(trigger != target) trigger.hide();
      var old_value = target.text().replace(/^\s+/,'').replace(/\s+$/,'');
      var input = $('<input>').val(old_value).
        width(target.width()+target.height()).css('font-size','100%').
        css('margin',0).attr('id','editable_'+(new Date()*1)).
        addClass('editable');
      var finish = function(){
        var res = input.val().replace(/^\s+/,'').replace(/\s+$/,'');
        target.text(res);
        callback({value : res, target : target, old_value : old_value});
        edit.register();
        if(trigger != target) trigger.show();
      };

      input.blur(finish);
      input.keydown(function(e){
        if(e.keyCode == 13) finish();
      });

      target.html(input);
      input.focus();
    };

    edit.register = function(){
      if(action == 'clickhold'){
        var tid = null;
        trigger.bind('mousedown', function(e){
          tid = setTimeout(function(){
            edit.start(e);
          }, 500);
        });
        trigger.bind('mouseup mouseout', function(e){
          clearTimeout(tid);
        });
      }
      else{
        trigger.bind(action, edit.start);
      }
    };
    edit.register();

    return this;
  };
})(jQuery);
