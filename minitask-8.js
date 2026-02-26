const movie = {
    id : 123,
    title : "okela",
    image : "ikan",
    genre : ["serem", "lucu", "gokil"],
    cast : [{
        name : "Jono",
        role : "pemain utama"
    }, {
        name : "Kasino",
        role : "sampingan"
    }],
    getFilm: function(){
        return `Judul : ${this.title} 
Gambar : ${this.image} 
Genre : ${this.genre}`
    },

    getCast: function(){
        return `Cast : ${this.cast[0].name}, ${this.cast[1].name}`
    },

    setTitle: function(newTitle){
        this.title = newTitle
    },

    setImage: function(newImage){
        this.image = newImage
    }
}

console.log(movie.getFilm())
console.log(movie.getCast())
movie.setTitle("Uwaw")
movie.setImage("Badak")
console.log(movie.getFilm())
