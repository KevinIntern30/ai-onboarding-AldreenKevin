const https = require("https");

const url = "https://jsonplaceholder.typicode.com/users";

https.get(url, (response) => {
    let data = "";

    response.on("data", (chunk) => {
        data += chunk;
    });

    response.on("end", () => {
        const users = JSON.parse(data);

        console.log("User Summary:\n");

        users.forEach((user) => {
            console.log(`Name: ${user.name}`);
            console.log(`Email: ${user.email}`);
            console.log(`City: ${user.address.city}`);
            console.log("----------------------");
        });
    });

}).on("error", (error) => {
    console.log("Error:", error.message);
});