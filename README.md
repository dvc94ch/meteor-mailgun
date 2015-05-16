## Mailgun for Meteor package

Mailgun contact and subscribe forms. Supports settings.json and orion.config settings.

## Code Example

Include an `{{> optinForm}}` or a `{{> contactForm}}` in your templates.

## Installation

`meteor add dvc:mailgun`

## API Reference

If the *orionjs:base* package is installed go to */admin/config* and set your *MAILGUN* settings.

If your not using orionjs create a *settings.json* file in your root app directory instead.

```
{
    MAILGUN_API_KEY: "key-********************************",
    MAILGUN_DOMAIN: "example.com",
    OPTINFORM_MAILINGLIST: "newsletter@example.com",
    CONTACTFORM_RECIPIENT: "youremail@example.com"
}
```

## License
```
/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <david@craven.ch> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.   David Craven
 * ----------------------------------------------------------------------------
 */
```
