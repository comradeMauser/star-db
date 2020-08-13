export default class Service {
    _urlBase = "https://swapi.dev/api";

    //returns resource from
    async getResource(url) {
        const resource = await fetch(`${this._urlBase}${url}`);
        if (!resource.ok) {
            throw new Error(`Could not fetch ${url}; received ${resource.status}`)
        }
        return await resource.json();
    };


    //Persons (total 82)
    getAllPersons() {
        return this.getResource("/people")
    };

    getPerson(id) {
        return this.getResource(`/people/${id}`)
    };

    //Planets(total 60)
    getAllPlanets() {
        return this.getResource("/planets")
    };

    getPlanets(id) {
        return this.getResource(`/planets/${id}`)
    };

    //Starships (total 36)
    getAllStarships() {
        return this.getResource("/starships/")
    };

    getStarship(id) {
        return this.getResource(`/starships/${id}`)
    };

    //Vehicles(total 39)
    getAllVehicles() {
        return this.getResource("/vehicles")
    };

    getVehicles(id) {
        return this.getResource(`/vehicles/${id}`)
    };


}

//test
const test = new Service()

test.getAllPersons().then((res) => console.debug(res))
test.getPerson(21).then((res) => console.log(res.name))

test.getAllStarships().then((res) => console.debug(res))
test.getStarship(2).then((res) => console.log(res.name))

test.getAllVehicles().then((res) => console.debug(res))
test.getVehicles(4).then((res) => console.log(res.name))

test.getAllPlanets().then((res) => console.debug(res))
test.getPlanets(4).then((res) => console.log(res.name))
