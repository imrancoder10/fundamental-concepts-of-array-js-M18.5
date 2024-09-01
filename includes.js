const friends = ['Ruma', 'Rema', 'Rana', 'Raju'];
// includes এর value is case sensitive
console.log(friends.includes('Rema')); //true
console.log(friends.includes('rema')); //false

// if else condition
if(friends.includes('Ruma')){
    console.log('Will be Going On Party.....');
}
else{
    console.log('No party with you.');
}