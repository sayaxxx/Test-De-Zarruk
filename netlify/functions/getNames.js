const fetch = require("node-fetch");

exports.handler = async function(event, context) {
    const NETLIFY_TOKEN = 'Qqj7j74jqsPbnaJpnsrOQPJFREXWEd71g9AO7Pfaokc';
    const FORM_ID = '650001eb1c9d9b00083dd503'; 

    const endpoint = `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${NETLIFY_TOKEN}`,
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();

    const names = data.map(submission => submission.data.userName);

    return {
        statusCode: 200,
        body: JSON.stringify(names)
    };
};
