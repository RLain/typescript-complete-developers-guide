
// Object annotations
// ℹ️ Note some code is commented out to prevent redeclaration errors

// The following is an example of including a function within an object definition that includes type annotation: setAge()

const profile = {
    name: "alex",
    age: 20,
    coordinates: {
        lat: 0,
        long: 15
    },
    setAge(age: number): void {
        this.age = age
    } 
}

// The following is possible, but the Lecturer wants to showcase destructuring
    // const age = profile.age

// Here is destructuring.
// As a start, if we want to destructure age, note that we can't simply annotate as a number. 
    // const { age }: number = profile

// We have to annotate the profile! And in this can destructure age out of profile.
const { age }: {age: number} = profile

// Plain destructuring without the annotation syntax is as follows:
    // const { coorsdinates: {lat, long}} = profile

// Now with type annotation
const { coordinates: { lat, long } }: {coordinates: {lat: number, long: number}} = profile
