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



function qrCodeGenerate(){

    new QRCode(qrBody,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#ffffff",
        colorDark:"#000000",

    });
}