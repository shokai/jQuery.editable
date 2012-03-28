$(
    function(){
        console.log('start');
        editable($('.name .editable'), function(e){
                     console.log(e);
                 });
    }
);