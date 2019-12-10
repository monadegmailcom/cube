# Initial steps

- install npm package manager `sudo apt install npm`
- make project dir `mkdir test-three; cd test-three`
- initialize npm package `npm init`
- install three `npm install three --save-dev`
- install webpack tools `npm install webpack webpack-cli --save-dev`
- change `package.json`:
```
+   "private": true,
-   "main": "index.js",
```
- create dir structure `mkdir dist src`
- create initial script file `touch src/index.js`
- initial html index file:
```
<!doctype html>
<html>
 <head>
   <title>Getting Started</title>
 </head>
 <body>
   <script src="main.js"></script>
 </body>
</html>
```
- copied the `index.html` from dist to src and created a softlink in dist
- build project `npm run build`
