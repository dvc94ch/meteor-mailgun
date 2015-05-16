var schema = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    }
});

Template.optinForm.helpers({
    schema: function() {
        return schema;
    }
});
