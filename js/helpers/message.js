function mostraMsg(status, mensagem, icone)
{
    $('#mensage_note').show();
	$('#mensage_note').attr('class', 'alert bg-'+ status);
	$('#icon-msg').attr('class', 'fas fa-'+icone);
	$('.content-msg').html(mensagem);	
}