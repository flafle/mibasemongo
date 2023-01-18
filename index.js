//Mensajes/productos/user

//Importar nuestras dependencias
import mongoose from "mongoose";

mongoose.set("strictQuery", true);


//Agregamos 10 documentos con valores distintos a las colecciones mensajes y productos.

const mensajes= [
    
    { user: {nombre: "Juan", email: "Perez@mail.com" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "Perez@mail.com" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "PPerez@mail.com" }, texto:"Muy buenos productos", 
    }  ,
    { user: {nombre: "Juan", email: "Perez@mail.com" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "Perez@mail.com" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "Perez@mail.com" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "Perez@mail.com" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "Perez@mail.com" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "Perez@mail.comz" }, texto:"Muy buenos productos", 
    },
    { user: {nombre: "Juan", email: "Perez@mail.comz" }, texto:"Muy buenos productos", 
    }, 
]
//Defino el esquema de los datos y del modelo,para interactuar con la base de datos.(leer, escribir)
const mensajesSchema = new mongoose.Schema({
    user: {
        nombre: {type: String, required: true},
        email: {type: String, required: true}
           },
            texto: {type: Date, default: Date.now },
         
});

const mensajesDAO = mongoose.model("mensajes", mensajesSchema);


const productos = [
    {
        "title":"Agenda",
        "description":"Agenda 2023, con organizador semanal . Gastos, ingresos y extras de cada mes",
        "code": "VC-CF-M",
        "thumbnail":"https://azafran.mitiendanube.com/productos/agenda-2023/",
        "price": 2500,
        "stock": 10,
        },
        {
            "title":"Recetario",
            "description":"Recuperemos cada receta nuevamente en el papel",
            "code": "VC-CF-M",
            "thumbnail":"https://azafran.mitiendanube.com/productos/recetario1/",
            "price": 1500,
            "stock": 20,
            },
            {
                "title":"Album de recuerdos",
                "description":"Plasma cada fotografia con dedicatoria a tu gusto!",
                "code": "VC-CF-M",
                "thumbnail":"https://azafran.mitiendanube.com/productos/album-de-recuerdos1/",
                "price": 1800,
                "stock": 5,
                },
                {
                    "title":"Calificador docente",
                    "description":"Un organizador para cada nota",
                    "code": "VC-CF-M",
                    "thumbnail":"https://azafran.mitiendanube.com/productos/calificador-docente1/",
                    "price": 1500,
                    "stock": 8,
                    },
                    {
                        "title":"Planner de finanzas",
                        "description":"Agenda 2023, con organizador semanal . Gastos, ingresos y extras de cada mes",
                        "code": "VC-CF-M",
                        "thumbnail":"https://azafran.mitiendanube.com/productos/planner-de-finanzas1/",
                        "price": 1200,
                        "stock": 15,
                        },
                        {
                            "title":"Organizador semanal",
                            "description":"Si no sos de agendas, te brindamos esta opcion super solicitada. Organizate a tu manera!",
                            "code": "VC-CF-M",
                            "thumbnail":"https://azafran.mitiendanube.com/productos/organizador-semanal//",
                            "price": 1200,
                            "stock": 30,
                            },
                            {
                                "title":"Cartuchera Azafran",
                                "description":"Una gran cartuchera artesanal para que ubiques tus materiales de trabajo de oficina, de aula y/o de casa",
                                "code": "VC-CF-M",
                                "thumbnail":"https://azafran.mitiendanube.com/productos/cartuchera-azafran/",
                                "price": 2800,
                                "stock": 24,
                                },
                                {
                                    "title":"Cartuchera plegable",
                                    "description":"Una gran cartuchera artesanal para que ubiques tus materiales de trabajo de oficina, de aula y/o de casa",
                                    "code": "VC-CF-M",
                                    "thumbnail":"https://azafran.mitiendanube.com/productos/cartuchera-plegable/",
                                    "price": 2500,
                                    "stock": 10,
                                    },
                                    {
                                        "title":"Cuaderno de hojas recicladas",
                                        "description":"Para seguir aportando al medio ambiente.Cuaderno de hojas recicladas.",
                                        "code": "VC-CF-M",
                                        "thumbnail":"https://azafran.mitiendanube.com/productos/cuaderno-de-hojas-recicladas/",
                                        "price": 1200,
                                        "stock": 4,
                                        },
                                        {
                                            "title":"Lapiz plantable",
                                            "description":"Para seguir aportando al medio ambiente.Lapices reciclables, plantables",
                                            "code": "VC-CF-M",
                                            "thumbnail":"https://azafran.mitiendanube.com/productos/lapiz-plantable/",
                                            "price": 200,
                                            "stock": 100,
                                            }

]
//Defino el esquema de los datos y del modelo,para interactuar con la base de datos.(leer, escribir)
const productosSchema = new mongoose.Schema(
    {
    title: {type: String, required: true},
    description: {type: String, required: true},
    code: {type: String, required: true},
    thumbnail: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true}
});

const productosDAO = mongoose.model("productos", productosSchema);


//Conectar a la base de datos:Ecommerce
await mongoose.connect("mongodb://localhost:27017/ecommerce", {
    serverSelectionTimeoutMS:5000, //la conexion persiste hasta que se conecte
});
console.log("base de datos conectada");



//Escritura a la base de datos:
const insercionesMensajes = [];

for (const mensaje of mensajes){
    insercionesMensajes.push(mensajesDAO.create(mensaje));

}

const resultMensajes= await Promise.allSettled(insercionesMensajes)
const rejectedMensajes = resultMensajes.filter(r => r.status == "rejected")
if (rejected.length > 0 ){
   console.log("fallos:" + rejectedMensajes.length)
} else {
    console.log("Ok!")
};

const insercionesProductos = [];

for (const producto of productos){
    insercionesProductos.push(productosDAO.create(producto));
}

const resultProductos = await Promise.allSettled(insercionesProductos)
const rejectedProductos = resultProductos.filter(r => r.status == "rejected")
if (rejectedProductos.length > 0){
    console.log("fallos: " + rejectedProductos.length)
} else {
    console.log("Ok!")
};

//Documentos de cada coleccion
mensajesDAO.countDocuments(function(err, mensajes){
    if (err) return console.error(err);
    console.log(mensajes);
});

productosDAO.countDocuments(function(err, productos){
    if (err) return console.error(err);
    console.log(productos);
});

//REALIZAR UN CRUD
//Agregar un producto mas en la coleccion producto--
//Realizar una consulta por nombre especifico
//mostrar cantidad de documentos almacenados en cada una de las colecciones
//Hacer una actualizacion
//Borrar

let newMensaje = new mensajesDAO({
   
        user: {
            nombre: "Susana",
            email: "susana@mail.com"
        },
        texto: "Muy buenos productos",
       
    });
    newMensaje.save(function (err){
        if (err) return console.error(err);
    });

let newProducto = new productosDAO({   
    "title": "Cuaderno de ventas",
    "description": "Para organizarte con cada venta",
    "code": "VC-CF-M",
    "thumbnail": "https://azafran.mitiendanube.com/productos/cuaderno-de-pedidos2/",
    "price": 1200,
    "stock": 45
    });

    newProducto.save(function(err) {
    if (err) return console.error(err);
});

const result = await Promise.allSettled(inserciones)
const rejected = result.filter(r => r.status == 'rejected')
if (rejected.length > 0){
    console.log('Fallos: ' + rejected.length)
} else {
    console.log("Ok!")
}

productosDAO.find({"price" : {$lt : 1000}}, function(err, productos) {
    if (err) return console.error(err);
    console.log(productos);
})

productosDAO.find({"price" : {$gte : 1000 , $lte : 3000}}, function(err, productos) {
    if (err) return console.error(err);
    console.log(productos)
})
// 
productosDAO.find({"price" : {$gt : 3000}}, function(err, productos) {
    if (err) return console.error(err);
    console.log(productos)
});

//
productosDAO.find({},{_id:0,"title":1}).sort({"price":1}).limit(1).skip(2)

//
productosDAO.updateMany({}, {$set :{"stock" : 100}}, function(err, productos){
    if(err) return console.error(err);
    console.log(productos)
});
//
productosDAO.find(function(err, productos){
    if (err) return console.error(err);
    console.log(productos);
});

//Actualizar
productosDAO.updateMany({price: {$gt: 4000}}, {$set :{stock : 0}}, function(err, productos){
    if (err) return console.error(err);
    console.log(productos)
});

//Borrar
productosDAO.deleteMany({price: {$lt: 1000}}, function(err, productos){
    if(err) return console.error(err); 
    console.log(productos);
});
//USER QUE LEA LA BASE DE DATOS Y NO PUEDA MODIFICARLA.
//user : "pepe" clave: "asd456"

const user = [
    { user: "pepe", pass: "asd456", roles:[{role: "read", db:"productos"}, {role: "read", db:"mensajes"}]}
];

const userSchema = new mongoose.Schema({
    user: {type: String, required: true},
    pass: {type: String, required: true},
    roles :[{
        role:{type: String},
        role: {type: String}
    }]
     
});

const userDAO = mongoose.model("user", userSchema); 

await mongoose.connect("mongo://localhost/user", {
        serverSelectionTimeoutMS: 5000,
});

            console.log("Conectada!")

const insercionesUser = []

for (const user of users){
    insercionesUser.push(usersDAO.create(user))
}

const resultUser = await Promise.allSettled(insercionesUser)
const rejectedUser = resultUser.filter(r => r.status == "rejected")
if (rejectedUser.length > 0){
    console.log("Fallos: " + rejectedUsua.length)
} else {
    console.log("Ok!")
};

await mongoose.disconnect() //Se cierra.

