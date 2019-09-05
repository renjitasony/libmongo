function validateForm(){        
    if($("#bname").val() == ""){
      alert("Title must be filled out");
      return false;
    }
    if($("#bauthor").val() == ""){
      alert("Author must be filled out");
      return false;
    }
    if($("#bcategory").val() == ""){
      alert("Category must be filled out");
      return false;
    }
    if($("#authname").val() == ""){
        alert("Name is mandatory");
        return false;
    }            
    if($("#authgenre").val() == ""){
        alert("Genre must be filled out");
        return false;
    }
    return true;
  }
    