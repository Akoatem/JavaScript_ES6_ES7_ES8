const personalInformation = {
    firstName: 'Ako',
    lastName : 'Atem',
    country : 'South Africa',
    city : 'Cape Town',
    address : '44 wale street'
}
const {firstName: fn, lastName: ln, country:ctr, city:cy, address:ad} = personalInformation

console.log(`${fn}${ln}\n ${ad}\n ${cy}\n ${ctr}`);