const Database = require('../db/config');

module.exports = {
    async create(req, res) {
        const db = await Database();
        // Pega o password la da input name da create-pass.ejs
        const pass = req.body.password
        let roomId
        
        for(var i = 0; i < 6; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }
       
        // Insere dados na DB
        await db.run(`INSERT INTO rooms (
            id,
            pass
        ) VALUES (
            ${parseInt(roomId)},
            '${pass}'
        )`)
        await db.close()

        res.redirect(`/room/${roomId}`)

    }
}