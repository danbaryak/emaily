const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {

    app.post('/api/credits', requireLogin,  async (req, res) => {
        const { credits } = req.body;
        req.user.credits += credits;
        const user = await req.user.save();
        res.send(user);
    });

    app.post('/api/credits/init', requireLogin, async (req, res) => {
        req.user.credits = 0;
        const user = await req.user.save();
        res.send(user);
    });

}