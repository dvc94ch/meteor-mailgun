Meteor.methods({
    'dvc:mailgun/contact': function (doc) {
        check([doc.name, doc.email, doc.message], [String]);
        this.unblock();

        var domain = Config('MAILGUN_DOMAIN');
        var apiURL = 'https://api.mailgun.net/v3/' + domain + '/messages';
        var email = 'contactform@' + domain;
        var options = {
            auth:  'api:' + Config('MAILGUN_API_KEY'),
            params: {
                to: orion.config.get('CONTACTFORM_RECIPIENT'),
                from: email,
                subject: "Message from " + doc.name,
                text: doc.message,
                'h:Reply-To': doc.email
            }
        };

        var onResult = function(error, result) {
            if(error)
                console.log("Error: " + error);
            else
                console.log("Message sent.");
        };

        Meteor.http.post(apiURL, options, onResult);
    },
    'dvc:mailgun/subscribe': function(doc) {
        check([doc.name, doc.email], [String]);
        this.unblock();

        var mailinglist = Config('OPTINFORM_MAILINGLIST');
        var apiURL = 'https://api.mailgun.net/v3/lists/' + mailinglist + '/members';
        var options = {
            auth: "api:" + Config('MAILGUN_API_KEY'),
            params: {
                subscribed: true,
                address: doc.email,
                name: doc.name
            }
        };

        var onResult = function(error, result) {
            if(error)
                console.log("Error: " + error);
            else
                console.log("Subscription successful.");
        }

        Meteor.http.post(apiURL, options, onResult);
    }
});
