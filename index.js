function  writeCards (names, event){
    //console.log(names);
    const newArr = [];
    for (let aName of names){
        //console.log(aName);
        const message = `Thank you, ${aName}, for the wonderful ${event} gift!`;
        //console.log(message);
        newArr.push(message);
    }
    console.log(newArr);
    return newArr;
}
//writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' )

function countDown(num){
    for (let i = num; i>-1; i--){
        console.log(i);
    }
}