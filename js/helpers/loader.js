function loading(load, content = $('#card_note'))
{
	if (load)
	{
		$(content).hide();
		$('#mensage_note').hide();
		$(".loader").show();
	}
	else
	{
		$(".loader").hide();
		$(content).show();
	}
}

function loadingIcon(load, content, append=false, contentAppend=false, size='lg')
{
	if (load)
	{
		if(append)
		{
			content.hide();
			contentAppend.append('<i class="fas fa-spinner fa-spin icon-load"></i>');
		}
		else
			content.html('<i class="fas fa-spinner fa-'+size+' fa-spin icon-load"></i>');
	}
	else
	{
		if(append)
		{
			content.show();
			contentAppend.find('.icon-load').remove();
		}
		else
			content.html('');
	}
}