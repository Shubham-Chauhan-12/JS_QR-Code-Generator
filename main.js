const qrText = document.querySelector('#qr-text');
const sizes = document.querySelector('#sizes');
const generateBtn = document.querySelector('#genBtn');
const downloadBtn = document.querySelector('#downBtn');

let size = sizes.value;

const qrBody = document.querySelector('.content');

// generate btn click 
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    inputEmptyCheck();

    
    
})

// checking input empty
function inputEmptyCheck(){
    if(qrText.value.length > 0){
        qrCodeGenerate();
    }else{
        alert("Enter Text / Url to generate QR code")
    }
}

// size change
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    inputEmptyCheck();
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

// download button working
downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.content img');

    if(img !== null){
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttr);
    }else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})