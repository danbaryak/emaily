const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {

    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
        const survey = new Survey({
            title, 
            body, 
            subject,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSend: Date.now()
        });

        try {
            // send mail
            const mailer = new Mailer(survey, surveyTemplate(survey));        
            await mailer.send();
            
            // store survey
            await survey.save();
    
            // decrease a credit
            req.user.credits -= 1;
            const user = await req.user.save();
    
            res.send(user);    
        } catch (err) {
            res.status(422).send(err);
        }
    });
    
}