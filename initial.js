let person = {
    name: 'Dev',
    age: 25,
    occupation: 'Programmer'
    };
    // Accessing members of objects
    console.log(person.name);
    console.log(person['name']);
    // We can also change these properties or add new
    person['occupation'] = 'Chef';
    person['hairColor'] = 'black';
    console.log(person);
    // Delete property
    delete person['hairColor'];
    console.log(person);