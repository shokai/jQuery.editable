
var editable = function(target, callback){
    var strip = function(str){
        return str.replace(/^[ 　\t]+/,'').replace(/[ 　\t]+$/,'');
    };
    
    var edit_mode = function(){
        target.unbind('dblclick');
        var id = 'editable_'+(new Date()*1);
        var input = $('<input>').attr('id',id).addClass('editable').
            val(strip(target.html().toString())).
            keydown(function(e){
                        if(e.keyCode == 13){
                            var res = strip(input.val());
                            target.html(res);
                            target.bind('dblclick', edit_mode);
                            callback(res);
                        }
                    });
        target.die();
        target.html(input);
    };
    
    target.bind('dblclick', edit_mode);
};