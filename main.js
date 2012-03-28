$(
    function(){
        console.log('start');
        $('.name .editable').editable(function(e){
                                          console.log(e.value);
                                      });
        $('.city .editable').editable(function(e){
                                          console.log(e.value);
                                      });
    }
);
