//declaração dos elementos usando DOM(document object model)
const videoElemento = document.getElementById("video");
const botaoScanear = document.getElementById("btn-texto");
const resultado = document.getElementById("saida");
const canvas = document.getElementById("canvas");

//função assicrona para habilitar a câmera

async function configurarCamera() {
    //tratamento de erros
    try{
        //chama a api do navegador para solicitar acesso
        const midia = await navigator.mediaDevices.getUserMedia({
            //habilita a camera traseira
            video:{facingMode: "environment"},
            //o audio não sera capturado 
            audio: false
        });
        //recebe a função midia para ser executada
        videoElemento.srcObject=midia;
        //força reprodução do video
        videoElemento.play();

    }catch(erro){
        resultado.innerText="Erro ao acessar a Câmera", erro;
    }
}
//executando a função
configurarCamera();

//função para capturar o texto da camera
botaoScanear.onclick =async ()=>{
    botaoScanear.disabled=true; //habilitando a camera
    resultado.innerText="Fazendo a leitura do texto...aguarde";

    //define canvas para iniciar a leitura
    const contexto = canvas.getContext("2d")

    //ajusta o tamanho do canvas para o tamanho real do video
    canvas.width = videoElemento.videoWidth;
    canvas.height = videoElemento.videoHeight;

    //aplica o filtron para melhorar o OCR
    contexto.filter="contrast(1.2) grayscale(1)";

    //desenha o video no canvas
    contexto.drawImage(videoElemento,0,0,canvas.width,canvas.height);
    try{
        const {data:{text}}=await Tesseract.recognize(
            canvas,
            'por'//define o idioma
        );
        //remove os resultados em branco
        const textoFinal = text.trim();
            //estrutura condicional ternaria ? = if : = else
        resultado.innerText=textoFinal.length > 0 ?textoFinal: "Não foi possivel identificar o texto";

    }catch(erro){
        resultado.innerText="Erro no processamento",erro
    }
    finally{
        //desabilita o botão para fazer nova captura
        botaoScanear.disabled=false;
    }
}


// Declarando variáveis para o DOM da página IA JOVIX

const botaoVoltar = document.getElementById("btn-camera");

botaoVoltar.addEventListener("click", function() {
    window.location.href = "../index.html";
});

