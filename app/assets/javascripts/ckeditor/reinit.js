$(document).bind("turbolinks:load", function() {
  if (typeof(CKEDITOR) != "undefined"){
    for(name in CKEDITOR.instances){
      try{CKEDITOR.replace(name);}catch(err){};
    }
  }
});
