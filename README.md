Performance Dashboard
=====================
## About
A simple interface for visualizing extrapolated data via odometers and graphs.

## Tools
Visualization tools:
* Odometer - http://github.hubspot.com/odometer/
* Contour - http://forio.com/contour

## Style
Coding conventions are currently based off of:
* https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
* https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml

Most importantly use 2 space tabs for html, css, and js

# Developing & Running Locally
The web app loads local JSON files which are parsed to create the
visualizations. In order to do this, set up a local web server and access
your app locally at, for example, localhost:8000. Where 8000 is the port
that your server is running on.

```
python -m SimpleHTTPServer
```
