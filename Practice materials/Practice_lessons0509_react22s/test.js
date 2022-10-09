// // const message = "You are welcome.";
// // message.replaceAll(" ", "_");
// // console.log(message);


// const users = [
//     {id: 1,name: "Sam Doe"}, 
//     {id: 2,name: "Alex Blue"}
// ];
//     const userNamesArray = users.map(user => user.name);
//     console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];
//     const csv = userNamesArray.join(", ");
//     console.log(csv); // "Sam Doe, Alex Blue"

//     const csvNew = users.map ((user) =>user.name).join(",");
//     console.log(csvNew); // "Sam Doe, Alex Blue" in one line
    

// const grades = [20,17,19,32];

// const sum = grades.reduce((total, current) => {
//     return total + current;
// }, 0);

// console.log (sum);

// const dimensions = [20,29];
// const width = dimensions[0];
// const height = dimensions [1];

// console.log (width);
// console.log (height);



// const lat = [5.43298];
// const long = [1.5858];

// const point = [...lat,...long];

// console.log (point);

// const items = ["leather", "Tomatos", "Oranges"];
// const otherItems = [...items, "Grapefrut"];

// console.log (otherItems);



const config = {
    id: 1,
    isAdmin: false,
    theme: {
    dark: false,
    accessibility: true
    }
    };

// const id = config.id;
// const isAdmin = config.isAdmin;
// const theme = config.theme;

// console.log (id);
// console.log (isAdmin);
// console.log (theme);

// const {id, isAdmin,theme} = config;

// console.log (id);
// console.log (isAdmin);
// console.log (theme);

const user = {details: {name: {firstName: "Sam"}},data: null}

console.log (user.details?.name?.firstName);
console.log (user?.data);