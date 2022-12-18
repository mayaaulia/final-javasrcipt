function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]

    let arrayGenre = []
    if(typeof(favoriteGenre) !== 'undefined'){
            favoriteGenre.forEach(function (object) {
                movies.map((item)=>{
                        if( object == item.genre){
                            arrayGenre.push({
                                id: item.id,
                                name: item.name,
                                genre: item.genre,
                                soldTicket: item.soldTicket,
                                capacity: item.capacity
                            })
                        }
                    });
        
            })
    
        }
    
    // let tampung= favoriteGenre.favoriteGenre
    // const result = tampung ? tampung.length : 0;
    // console.log(result)
    // console.log(tampung)
    // if(typeof(tampung) !== 'undefined'){
    //     tampung.forEach(function (object, index) {
    //         movies.map((item)=>{
    //                 if( object == item.genre){
    //                     arrayGenre.push({
    //                         id: item.id,
    //                         name: item.name,
    //                         genre: item.genre,
    //                         soldTicket: item.soldTicket,
    //                         capacity: item.capacity
    //                     })
    //                 }
    //             });
    
    //     })

    // }
    
    // for (i=0; i<tampung.length; i++){
    //     movies.map((item)=>{
    //     if( tampung[i] == item.genre){
    //         arrayGenre.push({
    //             id: item.id,
    //             name: item.name,
    //             genre: item.genre,
    //             soldTicket: item.soldTicket,
    //             capacity: item.capacity
    //         })
    //     }
    // });

    // }
    
//     movies.map((item)=>{
//     const found = favoriteGenre.favoriteGenre.find
//     (e=>e == item.genre);
//     if (found !== undefined){
//         arrayGenre.push({
//             id: item.id,
//             name: item.name,
//             genre: item.genre,
//             soldTicket: item.soldTicket,
//             capacity: item.capacity
//         })
//     }// TODO: replace this
// });

// if(arrayGenre.length>1){
    return arrayGenre;
// }
// else{
//     return `Tidak ada film yang sesuai kriteria`
// }
}

function findTicketAvailability(movie, user) {
    let hasil = ''
    //    console.log(item.capacity)
    let ticketAvailabel = movie.capacity-movie.soldTicket
    if(ticketAvailabel>user.ticket || ticketAvailabel == user.ticket ){

        hasil = 'ticketAvailabel'
    }
    return Boolean(hasil) 
}

function findRecommendation(user) {
    let hasil = []
    let tampung= user.favoriteGenre
    const find = findMovies(tampung)
    // console.log(find)
    find.map((item)=>{
        let ticketAvailabel = item.capacity-item.soldTicket
        // console.log(ticketAvailabel)
        if(ticketAvailabel>user.ticket || ticketAvailabel == user.ticket){
            hasil.push({
                id: item.id,
                name: item.name,
                genre: item.genre,
                soldTicket: item.soldTicket,
                capacity: item.capacity
            })
        }
    })

    // console.log(find)
    // const getTicket = findTicketAvailability(find, user)
    // console.log(getTicket)
    
    return hasil; // TODO: replace this
}

function generateRecommendation(user) {
    let result = []
    let price = { Action:100000, Musical:80000, Romance:40000, Horror:75000 }
    // let wadah= user.favoriteGenre
    // console.log(wadah)
    const tampung = findRecommendation(user);
    // console.log(tampung)
    tampung.map((item)=>{
        for (char in price){
            if(item.genre == char){
                ticketPrice = user.ticket*price[char]
                result.push({
                    id: item.id,
                    name: item.name,
                    genre: item.genre,
                    totalPrice: ticketPrice,
                })
            }
        }
    //    if(item.genre == ) 
    })
    if(tampung.length<1){
        return `Tidak ada film yang sesuai kriteria`
    }
    return result; // TODO: replace this
}
let user4 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical']
}
let user5 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}
let movie = {
    id: 7,
    name: 'Dear Evan Hansen',
    genre: 'Musical',
    soldTicket: 150,
    capacity: 200
}
// let userA = {
//     name: 'Djalal',
//     ticket: 10,
//     favoriteGenre: ['Action', 'Musical']
// }

// let userB = {
//     name: 'Djarot',
//     ticket: 100,
//     favoriteGenre: ['Musical']
// }
let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}
let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}
// let userC = {
//     name: 'Djalal',
//     ticket: 20,
//     favoriteGenre: ['Musical', 'Romance']
// }

// let userD = {
//     name: 'Djarot',
//     ticket: 10,
//     favoriteGenre: ['Action', 'Musical']
// }
// console.log(findMovies(['Action', 'Musical']))
// console.log(findMovies(['Action', 'Musical', 'Romance', 'Horror']))
// console.log(findMovies(user3))

// console.log(findRecommendation(userC))
// console.log(findRecommendation(userD))



// console.log(findTicketAvailability(movie, userB))
// console.log(findTicketAvailability(movie, userA))

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))

module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}
