Alfrescian CMIS Browser
=====

Simple CMIS Repository Browser using CMIS 1.1 Browser Binding based AngularJS and Bootstrap.

Status
------
Initial project was written as demo for an Alfresco Meet the Experts.

Approach
--------

In a nutshell:

* Yeoman is used as tool (yo, bower, grunt).
* application is build with AngularJS and Twitter Bootstrap
* the interface is based on Bootstrap</a>
* application accesses an CMIS 1.1 compliant repository using the JSON browser binding
* local Alfresco One 4.2 & cmis.alfresco.com repository was tested

Getting Started
--------
0. Install [Node.js](http://nodejs.org/) and NPM (should come with)

1. Install global dependencies `grunt-cli`, `bower`, and `karma`:

    ```bash
    $ npm install -g karma grunt-cli bower
    ```

2. Install local dependencies:

    ```bash
    $ npm install
    $ bower install
    ```
3. start local server:

    ```bash
    $ grunt server
    ```    
