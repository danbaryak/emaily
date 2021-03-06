const keys = require('../../config/keys');

module.exports = ({ body }) => {
    return `
        <html>
            <body>
                <div style-"text-align: center;">
                    <h3>I'd like your input</h3>
                    <p>Answer the following question</p>
                    <p>${body}</p>
                    <div>
                        <a href="${keys.redirectDomain}">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}">No</a>
                    </div>
                </div>
            </body>
        </html>
    `
};