const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const lista = new MovieList()
const filme1 = new Movie('Velozes e Furiosos 5', 'Justin Lin', 'Universal', '15 de abril de 2011');
lista.addMovie(filme1);

lista.addMovie(new Movie('Velozes e Furiosos 7', 'James Wan', 'Universal', '15 de abril de 2015'));

lista.addMovie(new Movie('Velozes e Furiosos 10', 'James Wan', 'Universal', '15 de abril de 2015'));

lista.addMovie(new Movie('Velozes e Furiosos 4', 'James Wan', 'Universal', '15 de abril de 2015'));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, diretor, distribuicao, lancamento } =  req.body;
            if(!title || !diretor || !distribuicao || !lancamento) {
                throw new Error('Preencha todos os campos!!');
            }
            const filme = new Movie (title, diretor, distribuicao, lancamento);
            lista.addMovie(filme);
            res.status(200).json({message: "Filme criado com sucesso"});
        } catch (error) {
            res.status(400).json({message: "Erro ao criar o filme", error});
        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = lista.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({message: 'Erro ao buscar o filme', error});
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(lista.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: 'Erro ao buscar o filme por id',
                error
            });
        }
    },
    updateMovie: (req, res) => {
        try{
            res.status(200).json(lista.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar",
                error: error.message,
            });
        }
    },

    deleteMovie: (req, res) => {
        try {
            lista.deleteMovie(req.params.id)
            res.status(200).json({
                message: 'Filme deletado com sucesso',
            })
        } catch (error) {
            res.status(404).json('Erro ao deletar o filme', error);
        }
    },

};

module.exports = router;