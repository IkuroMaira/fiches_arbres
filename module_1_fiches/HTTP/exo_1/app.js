// On appelle express
const express = require('express')
const neon = require("notre_base")

// On utilise la méthode de la bibliothèque express
const app = express()
const db_url = "notre_url"
const sql = neonServer.neon(db_url);

// Créer une route
app.get('/menu', async (req, res) => {
    const menus = await sql`SELECT * FROM menu;`;
    res.send(menus)
})

app.post ("/menu", async (req, res) => {
    const menus = await sql`INSERT INTO menu (id, ) VALUES (NULL, "fries", "Bâton de pomme de terre", "🍟");`;
    res.send(menus)
})

// On demande au serveur d'écouter sur un port qu'on lui précise
app.listen(3002, function () {
    console.log('Server is running on 3002')
})