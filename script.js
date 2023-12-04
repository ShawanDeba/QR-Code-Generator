let api_url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=loda";
let input_data = document.getElementById('input');
let qrCode = document.getElementById('qr_image');
let img_box = document.getElementById('image_box')

function get_qr_code(){
    if(input_data.value.length>0)
    {
        qrCode.src  =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input_data.value;
        img_box.classList.add('show_image')
    }

    else{
        input_data.classList.add('error');
        setTimeout(()=>{
            input_data.classList.remove('error');
        },1000);
    }
}
