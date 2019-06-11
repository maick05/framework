function loadSelect(select, div, arrGet, preUrl='')
{
    loadingIcon(true, select, true, div);
    $.get(preUrl+"get_"+arrGet, function(data)
    {
        var arrGet = JSON.parse(data);
        loadingIcon(false, select, true, div);
        select.html('<option value="">All</option>');
        for(i in arrGet)
        {
            select.append('<option value="'+arrGet[i].id+'">'+arrGet[i].title+'</option>');
        }
    });   
}