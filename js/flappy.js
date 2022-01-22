function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}


//função para criar o css das barreiras.
function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

//const b = new Barreira(true)
//b.setAltura(150)
//document.querySelector('[wm-flappy]').appendChild(b.elemento)

//função para gerar as barreiras na tela.
function ParDeBarreiras(altura, abertura, x) {
    //criando a barreira
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)
//dando aleatoridade na abertura que terá entre uma barreira e outra. 
    this.randomOpen = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
//para por a distancia entre uma barreira e outra.
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.randomOpen()
    this.setX(x)

}

/* usado para testa as funções acima.
const b = new ParDeBarreiras(700, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.elemento)

*/

function Barreiras(altura, largura, abertura, espaco, NotificarPonto){
    this.pares = [
        new ParDeBarreiras(altura, abertura, largura),
        new ParDeBarreiras(altura, abertura, largura + espaco),
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    

    const deslocamento = 3
    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento)

            // elemento sair da tela, volta para o inicio da tela
            
            if(par.getX() < -par.getLargura()) {
                par.setX(par.getX() + espaco * this.pares.length)
                par.randomOpen()
            }
            const meio = largura / 2
            const CruzouMeio = par.getX() + deslocamento >= meio
              && par.getX() < meio
            if(CruzouMeio) NotificarPonto()
        })
    }

}

function Gato(alturaJogo) {
    let voando = false

    this.elemento = novoElemento('img', 'gato')
    this.elemento.src = 'imgs/gato.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = y => this.elemento.style.bottom = `${y}px`


    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        }else{
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}
/*
const barreiras = new Barreiras(700, 1200, 200, 400)
const gato = new Gato(700)
const areaDoJogo = document.querySelector('[wm-flappy]')
areaDoJogo.appendChild(gato.elemento)
areaDoJogo.appendChild(new Progresso().elemento)
barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
setInterval(() => {
    barreiras.animar()
    gato.animar()

}, 20)

*/


function sobreposição(elemA, elemB){
const a = elemA.getBoundingClientRect()
const b = elemB.getBoundingClientRect()

const horizontal = a.left + a.width >= b.left
    && b.left + b.width >= a.left
const vertical = a.top + a.height >= b.top
&& b.top + b.height >= a.top
return horizontal && vertical
}

function colidiu(gato, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(ParDeBarreiras =>{
        if (!colidiu) {
            const superior = ParDeBarreiras.superior.elemento 
            const inferior = ParDeBarreiras.inferior.elemento 
            colidiu = sobreposição(gato.elemento, superior)
            || sobreposição(gato.elemento, inferior)
            

        }
    })
    return colidiu
}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos =>{
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function flappyCat() {
    let pontos = 0

    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400,
    () => progresso.atualizarPontos(++pontos))
    const gato = new Gato(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(gato.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        //loop do jogo
        const temporizador = setInterval(() =>{
            barreiras.animar()
            gato.animar()

            if (colidiu(gato, barreiras)){
                clearInterval(temporizador)
            }
        },20)
    }
}

new flappyCat().start()