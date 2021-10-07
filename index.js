const express = require('express');

const app = express ();

app.get('/', (req, res) =>{
    res.json({
        ok: true,
        msg: 'todo salio bien',
        user: 1234
    })
})

app.listen(4000, () =>{
    console.log(`servidor corriendo en puerto ${4000}`)
})

