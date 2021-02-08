// necesitamos crear 3 celebiryts y movies
// lo primero conectamere a la db con config
require('dotenv').config()
require('../config/db.config');
// para la base de datos
const mongoose = require('mongoose');

//llamar a las bases de datos
const Celebrity = require('../models/celebrity');
//llamar a las peliculas
const Movie = require('../models/movie');

//lo primer que hay que hacer es borrar la base de datos.
Promise.all([
        Celebrity.deleteMany(),
        Movie.deleteMany()
    ])
    .then(( /*devuleve un array con cada una de ellas. en este caso no devuelve nada*/ ) => {
        const celebrities = [{
                    name: 'Brad Pitt',
                    ocupation: 'actor',
                    catchPhrase: 'Im one of those people you hate because of genetics. It is the truth',
                },
                {
                    name: 'Viola Davis',
                    ocupation: 'actress',
                    catchPhrase: 'The only thing that separates women of color from anyone else is opportunity.',
                },
                {
                    name: 'Jennifer Lawrence',
                    ocupation: 'actress',
                    catchPhrase: 'If I don’t have anything to do all day, I might not even put my pants on.'

                }
            ]
            //ahora hay que meterlos en la DB
        return Celebrity.insertMany(celebrities)

    })
    .then((celebrities) => {
        celebrities.forEach(celebrity => console.log('${celebrity.name} has been created'))
        const movies = [{

                title: 'Fight club'
                genre: 'Drama',
                plot: 'A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed.'
            }

            {
                title: 'Fences'
                genre: 'Drama',
                plot: 'A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.'
            } {
                title: 'Silver Linings Playbook'
                genre: 'Romance',
                plot: 'Después de perder su casa, su trabajo, su esposa y pasar ocho meses en prisión, Pat Solatano termina con sus padres. Está decidido a reconstruir su vida y reunirse con su esposa, sin embargo sus padres insisten con compartir su obsesión por las Águilas de Filadelfia. Las cosas se complican cuando Pat conoce a Tiffany, que le ofrece ayuda para reencontrarse con su esposa si a cambio hace algo muy importante.'
            }
        ]
        return Movie.insertMany(movies)

    })
    .then((movies) => {
        movies.forEach((movie) => console.log('${movie.title} has been created'))
    })
    .catch((e) => console.error(e))
    .finally(() => {
        mongo.connection.close()
            .then(() => console.log('Se ha desconectado correctamente del DB'))
            .catch((e) => console.error('Error al desconectarse de la DB'))
            .finally(() => process.exit())
    }) //desconectarme de la base de datos