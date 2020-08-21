export default class Service {
    _urlBase = "https://swapi.dev/api";
    _urlImageBase = "https://starwars-visualguide.com/assets/img"

    //returns resource from
    async getResource(url) {
        const resource = await fetch(`${this._urlBase}${url}`);
        if (!resource.ok) {
            throw new Error(`Could not fetch ${url}; received ${resource.status}`)
        }
        return await resource.json();
    };

    //Persons (total 82)
    getAllPersons = async () => {
        const data = await this.getResource("/people");
        return data.results.map(this._dataPerson)
    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`);
        return this._dataPerson(person)
    };

    getPersonImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    };

    //Planets(total 60)
    getAllPlanets = async () => {
        const data = await this.getResource("/planets");
        return data.results.map(this._dataPlanet)
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`);
        return this._dataPlanet(planet)
    };

    getPlanetImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    };

    //Starships (total 36)
    getAllStarships = async () => {
        const data = await this.getResource("/starships/");
        return data.results.map(this._dataStarship)
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}`);
        return this._dataStarship(starship)
    };

    getStarshipImage = (id) => {
        return `${this._urlImageBase}/starships/${id}.jpg`
    }

    //Vehicles(total 39)
    getAllVehicles = async () => {
        const data = await this.getResource("/vehicles");
        return data.results.map(this._dataVehicle)
    };

    getVehicle = async (id) => {
        const vehicle = await this.getResource(`/vehicles/${id}`);
        return this._dataVehicle(vehicle)
    };

    getVehicleImage = (id) => {
        return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`
    };

    //returns ID from url
    _dataId = (data) => {
        const regExp = /\/(\d*)\/$/;
        return data.url.match(regExp)[1];
    }

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
    _dataVehicle = (vehicle) => {
        return {
            id: this._dataId(vehicle),
            name: vehicle.name,
            model: vehicle.model,
            crew: vehicle.crew,
            cargo: vehicle.cargo_capacity,
            class: vehicle.vehicle_class,
        }
    };

}

//test
// const test = new Service()

// test.getAllPersons().then((res) => console.log(`All Persons:`,res))
// test.getPerson(23).then((res) => console.log(`Person ${res.name}:`,res))

// test.getAllStarships().then((res) => console.log(`AllStarships:`,res))
// test.getStarship(2).then((res) => console.log(`ItemDetails ${res.name}:`,res))

// test.getAllVehicles().then((res) => console.log(`All Vehicles:`,res))
// test.getVehicles(4).then((res) => console.log(`Vehicle ${res.name}:`, res ))

// test.getAllPlanets().then((res) => console.log(`All Planets:`, res))
// test.getPlanet(3).then((res) => console.log(`Planet ${res.name}:`, res))