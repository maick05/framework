function swalConfirm(msg, callback)
{
    swal({
        title:"Are you Sure?",
        text: msg,
        buttons: {
          Cancel: 
          {
              text:"Cancel",
              value: false,
          },
          Yes: {
            text: "Yes",
            value: true,
          },
        },
        icon: "warning",
    }).then((value) => callback(value));
}