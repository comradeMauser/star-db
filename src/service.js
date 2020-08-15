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
    async getAllPersons() {
        const data = await this.getResource("/people");
        return data.results.map(this._dataPerson)
    };

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}`);
        return this._dataPerson(person)
    };


    //Planets(total 60)
    async getAllPlanets() {
        const data = await this.getResource("/planets");
        return data.results.map(this._dataPlanet)
    };

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._dataPlanet(planet)
    };


    //Starships (total 36)
    async getAllStarships() {
        const data = await this.getResource("/starships/");
        return data.results.map(this._dataStarship)
    };

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._dataStarship(starship)
    };

    //Vehicles(total 39)
    getAllVehicles() {
        return this.getResource("/vehicles")
    };

    getVehicles(id) {
        return this.getResource(`/vehicles/${id}`)
    };

    _dataId(data) {
        const regExp = /\/(\d)*\/$/;
        return data.url.match(regExp)[1];
    }


    //returns prepared {planet} for state
    _dataPlanet = (planet) => {
        return {
            id: this._dataId(planet),
            name: planet.name,
            climate: planet.climate,
            diameter: planet.diameter,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
        }
    };


    //returns prepared {person} for state
    _dataPerson = (person) => {
        return {
            id: this._dataId(person),
            name: person.name,
            birth: person.birth_year,
            eye: person.eye_color,
            height: person.height,
            mass: person.mass,
        }
    };


    //returns prepared {starship} for state
    _dataStarship = (starship) => {
        return {
            id: this._dataId(starship),
            name: starship.name,
            model: starship.model,
            crew: starship.crew,
            cost: starship.cost_in_credits,
            passengers: starship.passengers,
        }
    };

        //returns prepared {planet} for state
        _dataPlanet = (planet) => {
            return {
                id: this._dataId(planet),
                name: planet.name,
                climate: planet.climate,
                diameter: planet.diameter,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
            }
        };

}

//test
const test = new Service()


// test.getAllPersons().then((res) => console.log("AllPersons:",res))
// test.getPerson(21).then((res) => console.log(`Person ${res.name}:`,res))
//
// test.getAllStarships().then((res) => console.debug(res))
// test.getStarship(2).then((res) => console.log(res))
//
test.getAllVehicles().then((res) => console.debug(res))
test.getVehicles(4).then((res) => console.log(res.name))
//
// test.getAllPlanets().then((res) => console.log("getAllPlanets:", res))
// test.getPlanet(3).then((res) => console.log(res.name))
