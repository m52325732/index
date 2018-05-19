


$(function(){

    $('#y6-2').click(function(){

        var name=$('#numan').val();
        var psw=$('#psword').val();

        if(name==="" || psw===""){
            alert('请确认是否输入完整')
        }else{
            var uname=localStorage.getItem("unman");
            var upsw=localStorage.getItem("password");
                if(name===uname){
                    if(psw===upsw){
                        window.location.href="https://www.baidu.com"

                    }else{
                        alert("输入的密码不正确")
                    }

                }else{
                    alert("输入的账号不存在")
                };





        }














    })







});
