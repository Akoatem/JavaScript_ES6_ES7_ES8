// object literal has the ability to overide the original address or properties

function addressMaker(city, state){
    let newAddress = {city: city, state: state};
   
    console.log(newAddress);

}
addressMaker('CapeTown', 'westernCape');
