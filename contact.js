$("#contact-form").submit((event)=>{
    event.preventDefault();
    sendEmail();
})
const sendEmail = () =>{
    const values = { "action":"sendEmail",
        "data":{"name":$("#name").val(),"email":$("#email").val(),"title":$("#subject").val(),"message":$("#message").val()}};
    $.ajax({
        url:"backend.php",
        method:'post',
        dataType: 'html',
        data: values,
        beforeSend: () =>{
            $("#contact_preloader").show();
            $("#sendMailBtn").addClass("disabled");
            $("#sendMailBtn").attr("disabled","disabled");
        },
        success: (data) =>{
            $("#contact_preloader").hide();
            $("#sendMailBtn").removeClass("disabled");
            $("#sendMailBtn").removeAttr("disabled","disabled");
            $("#ajaxR").html(data);
        },
        error: (err) =>{
            $("#contact_preloader").hide();
            $("#sendMailBtn").removeClass("disabled");
            $("#sendMailBtn").removeAttr("disabled","disabled");
            console.error(err);
        }
    })
} 

const toast = (msg) => {
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
    Toast.fire({ icon: 'success', title: msg });
}
const Etoast = (msg) => {
    const Toast = Swal.mixin({ toast: true, position: 'top-end', showConfirmButton: false, timer: 3000 });
    Toast.fire({ icon: 'error', title: msg });
}