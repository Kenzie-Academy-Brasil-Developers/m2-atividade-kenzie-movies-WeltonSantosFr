import kenzieMovies from "./utils/kenzieMovies.js";

/* Para conseguir buscar uma musica utilize esse método abaixo */
// await kenzieMovies.buscaFilmes();

/* Para conseguir acessar a musica que você buscou */
// console.log(kenzieMovies.filmes);

// Comece seu código a partir desse comentário.

await kenzieMovies.buscaFilmes()
console.log(kenzieMovies.filmes)

class Filmes {

    static filtraGenero(genre) {
        let filtrados = kenzieMovies.filmes.filter((filme) => {
           return filme.genre1 === genre
        })
        
        filtrados.forEach((filme) => {
            const newRow = document.createElement('tr')
            const nome = document.createElement('td')
            const genero = document.createElement('td')
            const idioma = document.createElement('td')
            const duracao = document.createElement('td')
            const score = document.createElement('td')
            const avaliacao = document.createElement('td')
            const lancamento = document.createElement('td')
            const som = document.createElement('td')
            const bonsReviews = document.createElement('td')
            const reviewsNeutros = document.createElement('td')
            const pais = document.createElement('td')
            const color = document.createElement('td')

            nome.innerText = filme.name
            genero.innerText = filme.genre1
            idioma.innerText = filme.language
            duracao.innerText = filme.duration
            score.innerText = filme.score
            avaliacao.innerText = filme.rating
            lancamento.innerText = filme.release
            som.innerText = filme.sound
            bonsReviews.innerText = filme.goodReviews
            reviewsNeutros.innerText = filme.neutralReviews
            pais.innerText = filme.country
            color.innerText = filme.color

            newRow.append(nome, genero, idioma, duracao, score, avaliacao, lancamento, som, bonsReviews, reviewsNeutros, pais, color)

            const tabela = document.getElementById("tabela")
            tabela.append(newRow)
        })
        
    }

    static filtraCor(color) {
        let filtrados = kenzieMovies.filmes.filter((filme) => {
            return filme.color === color
        })
        filtrados.forEach((filme) => {
            const newRow = document.createElement('tr')
            const nome = document.createElement('td')
            const genero = document.createElement('td')
            const idioma = document.createElement('td')
            const duracao = document.createElement('td')
            const score = document.createElement('td')
            const avaliacao = document.createElement('td')
            const lancamento = document.createElement('td')
            const som = document.createElement('td')
            const bonsReviews = document.createElement('td')
            const reviewsNeutros = document.createElement('td')
            const pais = document.createElement('td')
            const color = document.createElement('td')

            nome.innerText = filme.name
            genero.innerText = filme.genre1
            idioma.innerText = filme.language
            duracao.innerText = filme.duration
            score.innerText = filme.score
            avaliacao.innerText = filme.rating
            lancamento.innerText = filme.release
            som.innerText = filme.sound
            bonsReviews.innerText = filme.goodReviews
            reviewsNeutros.innerText = filme.neutralReviews
            pais.innerText = filme.country
            color.innerText = filme.color

            newRow.append(nome, genero, idioma, duracao, score, avaliacao, lancamento, som, bonsReviews, reviewsNeutros, pais, color)

            const tabela = document.getElementById("tabela")
            tabela.append(newRow)
        })
        
    }

    static ordenarPontuacao() {
        let filtrados = kenzieMovies.filmes.sort((a, b) => {
            return a.score > b.score ? -1 : a.score < b.score ? 1 : 0
        })
        filtrados.forEach((filme) => {
            const newRow = document.createElement('tr')
            const nome = document.createElement('td')
            const genero = document.createElement('td')
            const idioma = document.createElement('td')
            const duracao = document.createElement('td')
            const score = document.createElement('td')
            const avaliacao = document.createElement('td')
            const lancamento = document.createElement('td')
            const som = document.createElement('td')
            const bonsReviews = document.createElement('td')
            const reviewsNeutros = document.createElement('td')
            const pais = document.createElement('td')
            const color = document.createElement('td')

            nome.innerText = filme.name
            genero.innerText = filme.genre1
            idioma.innerText = filme.language
            duracao.innerText = filme.duration
            score.innerText = filme.score
            avaliacao.innerText = filme.rating
            lancamento.innerText = filme.release
            som.innerText = filme.sound
            bonsReviews.innerText = filme.goodReviews
            reviewsNeutros.innerText = filme.neutralReviews
            pais.innerText = filme.country
            color.innerText = filme.color

            newRow.append(nome, genero, idioma, duracao, score, avaliacao, lancamento, som, bonsReviews, reviewsNeutros, pais, color)

            const tabela = document.getElementById("tabela")
            tabela.append(newRow)
        })
    }

    static ordenaRevisao() {
        let filtrados = kenzieMovies.filmes.sort((a, b) => {
            return a.goodReviews > b.goodReviews ? -1 : a.goodReviews < b.goodReviews ? 1 : 0
        })
        filtrados.forEach((filme) => {
            const newRow = document.createElement('tr')
            const nome = document.createElement('td')
            const genero = document.createElement('td')
            const idioma = document.createElement('td')
            const duracao = document.createElement('td')
            const score = document.createElement('td')
            const avaliacao = document.createElement('td')
            const lancamento = document.createElement('td')
            const som = document.createElement('td')
            const bonsReviews = document.createElement('td')
            const reviewsNeutros = document.createElement('td')
            const pais = document.createElement('td')
            const color = document.createElement('td')

            nome.innerText = filme.name
            genero.innerText = filme.genre1
            idioma.innerText = filme.language
            duracao.innerText = filme.duration
            score.innerText = filme.score
            avaliacao.innerText = filme.rating
            lancamento.innerText = filme.release
            som.innerText = filme.sound
            bonsReviews.innerText = filme.goodReviews
            reviewsNeutros.innerText = filme.neutralReviews
            pais.innerText = filme.country
            color.innerText = filme.color

            newRow.append(nome, genero, idioma, duracao, score, avaliacao, lancamento, som, bonsReviews, reviewsNeutros, pais, color)

            const tabela = document.getElementById("tabela")
            tabela.append(newRow)
        })
    }
}

Filmes.filtraGenero("Animation")
// Filmes.filtraCor("Black and White")
// Filmes.ordenarPontuacao()
// Filmes.ordenaRevisao()