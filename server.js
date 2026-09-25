const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


/* =========================================
   ARQUIVOS ESTÁTICOS
========================================= */

// Página da surpresa
app.use(
    "/surpresa",
    express.static(
        path.join(__dirname, "surpresa")
    )
);


// Fotos, vídeos e outros arquivos
app.use(
    "/arquivos",
    express.static(
        path.join(__dirname, "arquivos")
    )
);


/* =========================================
   PÁGINA PRINCIPAL
========================================= */

app.get("/", (req, res) => {

    res.send(`
        <!DOCTYPE html>

        <html lang="pt-BR">

        <head>

            <meta charset="UTF-8">

            <title>Sistema 2-0</title>

            <style>

                body {
                    font-family: Arial, sans-serif;
                    background: #fff5f8;
                    color: #8f234d;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    min-height: 100vh;

                    text-align: center;
                }

                h1 {
                    font-size: 40px;
                }

            </style>

        </head>

        <body>

            <div>

                <h1>
                    Sistema 2-0 funcionando ❤️
                </h1>

                <p>
                    Sistema preparado para a surpresa.
                </p>

                <a href="/surpresa">
                    Abrir surpresa
                </a>

            </div>

        </body>

        </html>
    `);

});


/* =========================================
   SERVIDOR
========================================= */

app.listen(PORT, () => {

    console.log(
        `Servidor funcionando em http://localhost:${PORT}`
    );

});