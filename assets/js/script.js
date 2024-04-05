
//funcion iife
const iifeDom = (() => {
    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)
    }
    return {
        funcionPublica(url, id) {
            funcionPrivada(url, id)
        }
    }
})()

class Multimedia {
    #url;
    constructor(url) {
        this.#url = url
    }
    get url() {
        return this.#url
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"

    }
}

class Reproductor extends Multimedia {
    _id
    constructor(url, id) {
        super(url)
        this._id = id
    }

    playMultimedia() {
        iifeDom.funcionPublica(urlRetrasado, this._id)
    }
    setInicio(tiempo) {
        const urlRetrasado = `${this.url}?start=${tiempo}`;
        iifeDom.funcionPublica(urlRetrasado, this._id)
    }
}

const musica = new Reproductor("https://www.youtube.com/embed/epvaHZdUIEM", "musica")
const pelicula = new Reproductor("https://www.youtube.com/embed/b0uwLmqs3hw", "peliculas")
const serie = new Reproductor("https://www.youtube.com/embed/vAKBZeQklQw", "series")

musica.setInicio(10)
pelicula.setInicio(15)
serie.setInicio(5)

musica.playMultimedia()
pelicula.playMultimedia()
serie.playMultimedia()

