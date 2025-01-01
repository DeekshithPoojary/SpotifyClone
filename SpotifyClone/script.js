console.log("javascrpit begins");


async function main() {
    let a = await fetch("http://127.0.0.1:3000/Songs/")
    let response = await a.text();
    console.log(response)

}
main();

// async function main() {
//     try {
//         let a = await fetch("http://127.0.0.1:3000/Songs/", { mode: 'no-cors' });
//         console.log('Request was successful, but response is opaque due to no-cors mode.');
//         let response = await a.text();
//         console.log(response)
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// main();
