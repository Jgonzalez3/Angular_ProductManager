var path = require("path");
module.exports = (app)=>{
    var controller = require("../controllers/products")();
    app.get("/findproduct", (req, res)=>{
        controller.index(req, res);
    })
    app.get("/findproduct/:id", (req, res)=>{
        controller.product(req, res);
    })
    app.post("/product", (req, res)=>{
        controller.createProduct(req, res);
    })
    app.put("/product/edit/:id", (req, res)=>{
        controller.updateProduct(req, res);
    })
    app.delete("/product/delete/:id", (req, res)=>{
        controller.deleteProduct(req, res);
    })
    // below app.all defaults to Angular Front-end routes after checking Server Back-end routes
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./PPM/dist/PPM/index.html"))
    })
}