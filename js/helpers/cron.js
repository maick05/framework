function startTime(sec=$('.s').html()){
    sec = parseInt(sec);
    $('.m').each(function(){
        passageiro($(this).parent().find('.s'));
    });
}

function passageiro(elemento)
{
    
    let i = parseInt(elemento.html());
    let m = parseInt(elemento.parent().find('.m').html());
    let h = parseInt(elemento.parent().find('.h').html());
    if(h >0 || m >0 || i > 0)
    {
        setTimeout(function(){ 
            i--;    
               
            if(i == -1)
            {
                if(h <=0 && m <=0 )
                    return true;
                
                i = 59;
                elemento.html(setDisplay(i));
                m--;
                if(m == -1)
                {
                    m = 59;
                    h--;  
                    
                    if(h < 0)
                    {
                        m = 0;
                    }
                    else
                    {
                        elemento.parent().find('.m').html(setDisplay(m));
                        elemento.parent().find('.h').html(setDisplay(h));
                    }
                }
                elemento.parent().find('.m').html(setDisplay(m));
            }
            else
            {
                elemento.html(setDisplay(i));
            }
            
            if(h == 0 && m == 0)
            {
                controleTempo(true, false);
            }

            if(h <=0 && m <=0 && i <= 0)
            {
                elemento.html(setDisplay(0));
                controleTempo(false, true, elemento.parent().find('.m'));
                return true;
            }
            passageiro(elemento);
        }, 1000);
    }
    else
    {
        controleTempo(false, true, elemento.parent().find('.m'));
    }
}

function setDisplay(num)
{
    if(num < 10)
    {
        num = "0" + num;
    }

    if(num == '000')
        num = '00';
    return num;
}

function controleTempo(acabando=true, acabou=true, min)
{
        if(acabando)
        {
            if(min.html() == '00' && min.parent().find('.h').html() == '00')
            {
                //alert('s');
                min.parent().addClass('piscar');
            }
        }
        

        if(acabou)
        {
            if(min.html() == '00' && min.parent().find('.h').html() == '00' && min.parent().find('.s').html() == '00')
            {
                min.parent().removeClass('piscar');
                min.parent().parent().css('background', 'red');
                min.parents('.div-id').find('button').prop('disabled', true);
                min.parents('.div-id').find('button').addClass('bloqueado');
                min.parents('.div-id').find('.input-palpite').prop('readonly', true);

                min.removeClass('m');
                min.parent().find('.h').removeClass('h');
                min.parent().find('.s').removeClass('s');
            }
            if($('.bloqueado').length == 6)
            {
                $('#btn-all').prop('disabled', true);
            }
            
        }
}