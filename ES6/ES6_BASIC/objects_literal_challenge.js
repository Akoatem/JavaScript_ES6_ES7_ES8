// object literaland templates literal
function addressMaker(address){
    const{city, state} = address;  // referencing it to address

    const newAddress = {
        city,
        state,
        street: '340 Brakenfall',
        country: 'South Africa',
        postcode: 8001,
    };
   console.log(`${newAddress.city}\n ${newAddress.state}\n ${newAddress.street}\n
    ${newAddress.country}\n ${newAddress.postcode}\n`);
}
addressMaker({city:'CapeTown', state:'westernCape'});
