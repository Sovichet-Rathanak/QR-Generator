import QRCode from 'qrcode'
const canvas = document.querySelector(".qr-code");
const generateBtn = document.querySelector(".create-btn");
const downloadBtn = document.querySelector(".download-btn");

generateBtn.addEventListener("click", () =>{
    let userInput = document.querySelector(".url-input").value;
    console.log(userInput);
    generateQr(userInput);
});

downloadBtn.addEventListener("click", () => {
    downloadQr();
})

function generateQr(userInput){
    const context = canvas.getContext("2d");
    if (!canvas) {
        console.error("Canvas element not found");
        return;
    }
    QRCode.toCanvas(canvas, userInput,{width: 460, height: 460}, function (error) {
        if (error) console.error(error);
    });
}

function downloadQr(){
    let img = canvas.toDataURL("image/png"); //get image data from the canvas as a Based64-encoded
    let a = document.createElement("a"); //we need a tag to download the img
    a.href = img;
    a.download = "QR.png";
    document.body.append(a); //need to be a part of the DOM to be downloadable
    a.click(); //because we can't click it directly we have to use .click()
    document.body.removeChild(a);
}