//declaração dos elementos usando DOM(document object model)
const videoElemento = document.getElementById("video");
const botaoScanear = document.getElementById("btn-texto");
const resultado = document.getElementById("saida");
const canvas = document.getElementById("canvas");

//  NOVO: botão inverter
const btnInverter = document.getElementById("btn-inverter");

//  NOVO: controle de câmera
let usandoFrontal = true; // começa na frontal
let streamAtual = null;

//função assíncrona para habilitar a câmera
async function configurarCamera() {
    try{

        // PARA a câmera anterior antes de trocar
        if (streamAtual) {
            streamAtual.getTracks().forEach(track => track.stop());
        }

        //chama a api do navegador para solicitar acesso
        const midia = await navigator.mediaDevices.getUserMedia({
            //  ALTERADO: agora alterna entre frontal e traseira
            video:{ facingMode: usandoFrontal ? "user" : "environment" },
            //o audio não sera capturado 
            audio: false
        });

        streamAtual = midia;
        videoElemento.srcObject = midia;
        videoElemento.play();

    }catch(erro){
        resultado.innerText = "Erro ao acessar a Câmera";
        console.error(erro);
    }
}


configurarCamera();

btnInverter.addEventListener("click", () => {
    usandoFrontal = !usandoFrontal; // alterna
    configurarCamera(); // reinicia câmera
});

//função para capturar o texto da camera
botaoScanear.onclick = async ()=>{
    botaoScanear.disabled = true; //habilitando a camera
    resultado.innerText = "Fazendo a leitura do texto...aguarde";

    //define canvas para iniciar a leitura
    const contexto = canvas.getContext("2d");

    //ajusta o tamanho do canvas para o tamanho real do video
    canvas.width = videoElemento.videoWidth;
    canvas.height = videoElemento.videoHeight;

    //aplica o filtro para melhorar o OCR
    contexto.filter = "contrast(1.2) grayscale(1)";

    //desenha o video no canvas
    contexto.drawImage(videoElemento, 0, 0, canvas.width, canvas.height);

    try{
        const { data:{ text } } = await Tesseract.recognize(
            canvas,
            'por' //define o idioma
        );

        //remove os resultados em branco
        const textoFinal = text.trim();

        //estrutura condicional ternaria
        resultado.innerText = textoFinal.length > 0 
            ? textoFinal 
            : "Não foi possivel identificar o texto";

    }catch(erro){
        resultado.innerText = "Erro no processamento";
        console.error(erro);
    }
    finally{
        //desabilita o botão para fazer nova captura
        botaoScanear.disabled = false;
    }
}