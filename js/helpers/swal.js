function swalConfirm(msg, callback)
{
    swal({
        title:"Atenção!",
        text: msg,
        buttons: {
          Cancel: 
          {
              text:"Cancelar",
              value: false,
          },
          Yes: {
            text: "Sim",
            value: true,
          },
        },
        icon: "warning",
    }).then((value) => callback(value));
}