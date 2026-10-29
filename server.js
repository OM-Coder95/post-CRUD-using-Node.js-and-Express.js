const app = require("./app");

let port = process.env.PORT || 4000;

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on the port ${port}`)
    })
}
