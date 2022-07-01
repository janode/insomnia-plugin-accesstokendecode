# JWT (JSON Web Token) access token decoder for Insomnia REST Client

This is a plugin for the [Insomnia REST client](https://insomnia.rest/) to decode the **Header** and **Payload** part of a [JWT (JSON WebToken)](https://jwt.io/) access token, and add them to the response for easy debugging and visibility.

## Usage

After installing the plugin, run a request which returns a JWT (must have a property called `access_token`) and watch the header and payload being decoded and set in the response as `__access_token_header` and `__access_token_payload` respectively.
