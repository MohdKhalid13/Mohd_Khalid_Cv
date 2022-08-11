


let btnDownload = document.querySelector("#button");
btnDownload.addEventListener("click",startDownload);
async function startDownload(){
  let url ="MK.pdf";
  let fileName = "Mohd_Khalid_Cv";
  const res = await fetch(url);
  const blob = await res.blob();
  saveAs(blob, fileName);

}

    
