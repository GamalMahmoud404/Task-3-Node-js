const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const path = require ("path")
const publicDir =  path.join(__dirname , '../public')
app.use (express.static (publicDir))


app.set('view engine', 'hbs');

 const viewsDir = path.join (__dirname , '../hbs/views')
 app.set('views', viewsDir);

 var hbs = require('hbs');
const partialsPath = path.join(__dirname , "../hbs/partials")
hbs.registerPartials(partialsPath)

app.get ('/' , (req,res) => {
    res.render('index' , {
        title : "home",
        desc : "To learn more about our site, you can go here"
    })
})
  
app.get ('/service' , (req,res) => {
    res.render('service' , {
        title : "service",
        fname: "Mohamed",
        lname: "Salim",
        city:"Cairo",
        age: 40,
        img1: "images/man4.jpg"
    })
})


app.get ('/team' , (req,res) => {
    res.render('team' , {
        title : "team",
        obj1 : {
            fname: "Gemy",
            lname: "Arther",
            city:"London",
            age: 24,
            img2: "images/man1.jpg"
        },
        obj2 : {
            fname: "Ahmed",
            lname: "Yousef",
            city:"Alex",
            age: 30,
            img2: "images/man2.jpg"
        },
        obj3 : {
            fname: "Anas",
            lname: "Kareem",
            city:"Cairo",
            age: 27,
            img2: "images/man3.jpg"
        },
        obj4 : {
            fname: "Osama",
            lname: "Ramy",
            city:"Al Behara",
            age: 33,
            img2: "images/man4.jpg"
        },
        obj5 : {
            fname: "Sara",
            lname: "Ahmed",
            city:"Alex",
            age: 25,
            img2: "images/weman1.jpg"
        },
    })
})

app.get ('/products' , (req,res) => {
    res.render('products' , {
        title : "products",
        obj1 : {
            name: "Apple MabBook Air 2022",
        price: 1000 ,
        img2: "images/mac-aire.jpg"
        },
        obj2 : {
            name: "hp Pavilion 15",
        price: 800 ,
        img2: "images/hp-Pavilion-15.png"
        },
        obj3 : {
            name: "Dell Inspiron 15",
        price: 30 ,
        img2: "images/Dell-Inspiron-15.jpg"
        },
        obj4 : {
            name: "Asus Rog Strix Scar G15",
        price: 30 ,
        img2: "images/Asus-Rog-Strix-Scar-G15.jpg"
        },
        obj5 : {
            name: "Lenovo X1",
        price: 600 ,
        img2: "images/Lenovo-X1.png"
        },
        obj6 : {
            name: "Huawei MatBook D14",
        price: 900 ,
        img2: "images/Huawei-MatBook-D14.jpg"
        },
        obj7 : {
            name: "MacBook Pro 2024",
        price: 900 ,
        img2: "images/Huawei-MatBook-D14.jpg"
        }
    })
})

app.get ('/about' , (req,res) => {
    res.render('about' , {
        title : "about",
        details : "We are an online store that sells laptops. We have great experience and guarantee the quality and efficiency of the products.",
        end : "thanks for you."
    })
})








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
    
















