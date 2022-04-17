function addAccount(){
    var nama = document.getElementById("floatingInputName").value;
    var email = document.getElementById("floatingInputEmail").value;
    var pass = document.getElementById("floatingPassword").value;

    //buat data array
    var newDataAccount = {
        nameAccount: nama,
        emailAccount: email,
        passAccount: pass
    }
    if(localStorage.getItem("listAccount") == null){
        localStorage.setItem("listAccount", "[]");
    }

    var oldDataAccount = JSON.parse(localStorage.getItem("listAccount"));
    oldDataAccount.push(newDataAccount);

    localStorage.setItem("listAccount", JSON.stringify(oldDataAccount));

}
    