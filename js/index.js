


$(function(){

    $('#y6-2').click(function(){
        var ce= /^[A-Za-z0-9]+$/;
        var ce2= /^[A-Za-z0-9]{6,12}$/;
        var a=$('#numan').val();
        var b=$('#y5-1-1').val();
        var c=$('#password').val();
        if(a===""|| b===""||c===""){
            alert("请填写完整")

        }else{
            if(ce.test(a) && a.length>=6){
                if(ce2.test(b)){
                    //alert("输入正确")
                    if(c===b){
                        alert("注册成功");
                        localStorage.setItem('unman',a);
                        localStorage.setItem('password',c);
                        var a=$('#numan').val("");
                        var b=$('#y5-1-1').val("");
                        var c=$('#password').val("");
                    }else{
                        alert("密码与上面不符,请重新输入")
                       /* $('#y5-1-1').css({background:'#173178199' });
                        $('#password').css({background:'pink' });
                        $('#numan').css({background:'#173178199' });*/

                    }
                }else{
                   /* $('#y5-1-1').css({background:'pink' });
                    $('#password').css({background:'#173178199' });
                    $('#numan').css({background:'#173178199' });*/

                    alert("密码格式错误,请重新输入")

                };

            }else{
               /* $('#numan').css({background:'pink' });
                $('#y5-1-1').css({background:'#173178199' });
                $('#password').css({background:'#173178199' });*/

                alert("账号格式错误,请重新输入")
            };





        }


    })


















});