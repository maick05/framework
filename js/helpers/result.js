function carregaPagination(pag, pagination, callback)
{   
    $('.pag-num').remove();
    var max = 14;
    var tabMax = max;
    if(pag >= max)
        tabMax = max * (parseInt(pag/max));
    let i = pagination.numberPages;
    let prox = false;

    if(pagination.numberPages >= tabMax)
        i = tabMax;

    if((pag == tabMax - 1) && pagination.numberPages >= tabMax)
        prox = true;

    do
    {
        let classe = '';
        if(i==pag)
            classe = ' active';

        if(pagination.numberPages > tabMax && i == tabMax)
            var num = '<td class="btn btn-pagination pag-num desabilitado"><a>...</a></td>';
        else
            var num = '<td data-pag="'+i+'" class="btn btn-light btn-pagination pag-num'+classe+'"><a>'+i+'</a></td>';       
        $(num).insertAfter('.pag-backward');

        if(i==1 && prox)
        {
            var num = '<td class="btn btn-pagination pag-num desabilitado"><a>...</a></td>';
            $(num).insertAfter('.pag-backward');
        }
        i--;
    }while(i>(tabMax-max));
    
    $('.pag-arrow').removeClass('desabilitado');

    if(pag==1)
    {
        $('.pag-step-backward').addClass('desabilitado');
        $('.pag-step-backward').removeClass('btn-light');
        $('.pag-backward').addClass('desabilitado');
        $('.pag-backward').removeClass('btn-light');
        $('.pag-forward').data("pag", pag+1);
    }
    if(pagination.numberPages==pag)
    {
        $('.pag-step-forward').addClass('desabilitado');
        $('.pag-step-forward').removeClass('btn-light');
        $('.pag-forward').addClass('desabilitado');
        $('.pag-forward').removeClass('btn-light');
        $('.pag-backward').data("pag", pag-1);
    }

    if(pag>1 && pag<pagination.numberPages)
    {
        $('.pag-step-backward').data("pag", 1);
        $('.pag-backward').data("pag", pag-1);
        $('.pag-forward').data("pag", pag+1);
        $('.pag-step-forward').data("pag", pagination.numberPages);
    }
    
    $('.pagination').show();
    $('.btn-pagination').off( "click");
    $('.btn-pagination').on('click', function()
    {
        if(!$(this).hasClass('active') && !$(this).hasClass('desabilitado'))
        {
            $('.pagination').hide();
            callback($(this).data("pag"));
            $('.pagination').show();
        }
    });
}