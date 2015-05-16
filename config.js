Meteor.startup(function() {
    if(Package['orionjs:base']) {
        orion.config.add('MAILGUN_API_KEY', 'MAILGUN');
        orion.config.add('MAILGUN_DOMAIN', 'MAILGUN');
        orion.config.add('OPTINFORM_MAILINGLIST', 'MAILGUN');
        orion.config.add('CONTACTFORM_RECIPIENT', 'MAILGUN');
    }
});

if(Meteor.isServer) {
    Config = function(name) {
        if(Package['orionjs:base']) {
            return orion.config.get(name);
        }

        return Meteor.settings[name];
    }
}
