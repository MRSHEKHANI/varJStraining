// Which variables are available?

function makeWorker(){
    let name = "mustafa"

    return function (){
        console.log(name );
    }
}

let name = "shekhani";

let work = makeWorker();

work();