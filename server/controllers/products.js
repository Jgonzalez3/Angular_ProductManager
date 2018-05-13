module.exports = ()=>{
    require("../models/product")();
    return{
        index: (req, res)=>{
            Product.find({}, (err, products)=>{
                err=err ? console.log("ERROR ALL:", err) & res.json({message: "INDEX ERROR"}): res.json({message: "Success", products: products});
            })
        },
        product: (req, res)=>{
            var prodId = req.params.id
            Product.findById(prodId, (err, product)=>{
                err=err ? console.log("ERROR THIS Product", err) & res.json({message: "Product ERROR"}): res.json({message: "Success", product: product});
            })
        },
        createProduct: (req, res)=>{
            newProduct = new Product({title: req.body.title, price: req.body.price, image: req.body.image});
            newProduct.save((err)=>{
                err =err ? console.log("Create ERROR") & res.json({message:"CREATE ERROR"}, {error: err}): res.json({message: "Success"})
            })
        },
        updateProduct: (req, res)=>{
            var prodId = req.params.id;
            Product.findByIdAndUpdate(prodId, {title: req.body.title, price: req.body.price, image: req.body.image}, (err)=>{
                err=err ? console.log("UPDATE ERROR", err) & res.json({message: "Update Error"}): res.json({message: "Success"});
            })
        },
        deleteProduct: (req, res)=>{
            var prodId = req.params.id;
            console.log(prodId);
            Product.deleteOne({_id: prodId}, (err)=>{
                err=err ? console.log("ERRORS Remove", err) & res.json({message: "Delete error"}): res.json({message: "Success"})
            })
        }
    }
}