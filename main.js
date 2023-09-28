const qrText = document.querySelector('#qr-text');
const sizes = document.querySelector('#sizes');
const generateBtn = document.querySelector('#genBtn');
const downloadBtn = document.querySelector('#downBtn');

let size = sizes.value;

const qrBody = document.querySelector('.content');


generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    qrCodeGenerate();
})


sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    qrCodeGenerate();
})


// qr generate
function qrCodeGenerate(){

    qrBody.innerHTML = "";

    new QRCode(qrBody,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#ffffff",
        colorDark:"#000000",


    });
}