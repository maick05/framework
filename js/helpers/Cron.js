function startTime(){
    let sec = parseInt($('.s').html());
    passageiro(sec);
}

function passageiro(i)
{
    let m = parseInt($('.m').html());
    let h = parseInt($('.h').html());

    $('.s').html(setDisplay(i));

    setTimeout(function(){ 
        i--;        
        if(i == -1)
        {
            if(h <=0 && m <=0 )
                return true;
            
            i = 59;
            $('.s').html(setDisplay(i));
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
                    $('.m').html(setDisplay(m));
                    $('.h').html(setDisplay(h));
                }
            }
            $('.m').html(setDisplay(m));
        }

        if(h == 0 && m == 0)
        {
            controleTempo(true, false);
        }

        if(h <=0 && m <=0 && i <= 0)
        {
            $('.s').html(setDisplay(0));
            controleTempo(false);
            return true;
        }
        passageiro(i);
    }, 1000);
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

function controleTempo(acabando=true, acabou=true)
{
    $('.m').each(function(){
        if(acabando)
        {
            if($(this).html() == '00' && $(this).parent().find('.h').html() == '00')
            {
                //alert('s');
                $(this).parent().addClass('piscar');
            }
        }
        

        if(acabou)
        {
            if($(this).html() == '00' && $(this).parent().find('.h').html() == '00' && $(this).parent().find('.s').html() == '00')
            {
                $(this).parent().removeClass('piscar');
                $(this).parent().parent().css('background', 'red');
                $(this).parents('.div-id').find('button').prop('disabled', true);

                $(this).removeClass('m');
                $(this).parent().find('.h').removeClass('h');
                $(this).parent().find('.s').removeClass('s');
                return false;
            }
        }
    });
    startTime();
}