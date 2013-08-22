$(function(){
  $('h1').editable('mouseover');

  // double click
  $('.name .editable').editable('dblclick', function(e){
    alert(e.target.selector + ' : ' + e.value);
    console.log(e.value);
  });

  // single click
  $('.city .editable').editable('click', function(e){
    console.log(e.value);
  });

  // click hold
  $('.website .editable').editable('clickhold', function(e){
    var a_tag = $('<a>').attr('href', e.value).text(e.value);
    $('.website .editable').html(a_tag);
    alert(e.value);
    console.log(e.value);
  });

  // validation
  $('.zip .editable').editable('click', function(e){
    if(e.value.match(/^\d{3}\-\d{4}$/)){
      alert(e.target.selector + ' : ' + e.value);
    }
    else{
      $('.zip .editable').html(e.old_value);
      alert(e.value + ' is not valid zip-code');
    }
  });

  // edit button
  var option = {trigger : $('.age .btn_edit'), action : 'click'};
  $('.age .editable').editable(option, function(e){
    if(!e.value.match(/^\d+$/)){
      $('.age .editable').html(e.old_value);
      alert(e.value + ' is not valid age');
    }
    else{
      alert('save : '+e.value);
    }
  });

  // textarea
  $('.textarea .editable').editable({type: 'textarea', action: 'click'}, function(e){
    console.log(e.value);
  });

});
