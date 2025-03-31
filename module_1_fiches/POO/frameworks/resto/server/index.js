const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
const port = 3000;

const pool = new Pool({
    connectionString:
        "postgresql://neondb_owner:npg_rgc7vFQptZy6@ep-twilight-breeze-a8vhtcwk-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    ssl: {
        rejectUnauthorized: false, // Needed for SSL connection with Neon
    },
});

app.use(cors());

// Route GET /command/1
app.get("/command/1", async (req, res) => {
    const result = await pool.query("SELECT * FROM commands WHERE id=3");
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});