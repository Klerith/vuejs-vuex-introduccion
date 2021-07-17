

const getRandomInt = () => {

    return new Promise( resolve => {
        
        const rndInt = Math.floor( (Math.random() * 20) + 1 )
        
        setTimeout(() => {
            resolve( rndInt )
        }, 2000 );
    })

}


export default getRandomInt