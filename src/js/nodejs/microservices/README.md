################################################################
# AV Digital Media Ltd. Example NodeJS/Express/Passport/oAuth Mini App
*(c) AV Digital Media Ltd. All Rights Reserved.*
################################################################

This is a simple express application for utilizing oAuth2 and passport for
communicating with a 3rd Party API

The folder structure is as follows:

/private - This is the main application architecture
/public - This is the public web folder

# How to initialize

1. node install
2. node private/server.js
3. Run from http://localhost:3000

# Server Framework

This sample application uses "express" as the core framework for development
structuring the application in a typical MVC style architecture however there
are no real "models".

# Config
The oAuth Configuration details are stored in the private/config/config.js file.

# Controllers
There are 2 view rendering controller within the private/controllers folder allowing
the index and the userdetails pages to be rendered.

# Views
The views are generated using HandleBars

# Custom jQuery Plugin

Within the public/js folder resides a custom jQuery plugin which for the purpose
of demonstration simple fades in the userdetails row groups with a delay.

# RESPONSIVE TEMPLATE

Did not see the point of cluttering with a framework such as bootstrap. The SASS
and responsive nature has been custom written.
public/sass

# UNIT TESTING

Two unit testing examples have been included, one for the server using "mocha"
to test the node and express framework, only a rudimentary example.

The other is using QUnit in the public folder to run a simple test on the
custom jQuery component
