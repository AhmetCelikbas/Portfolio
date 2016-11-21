# Portfolio
## Description :
This project is a personal website built without template and hosted on http://ahmetcelikbas.fr .


# Getting started :

- You have to clone the repository on a folder somewhere on your computer :
```bash
$ git clone https://github.com/Keylan117/Portfolio.git
```
		
##Installation of the dependencies : 

To get the dependencies, you have to download and install Node.JS on your system from : https://nodejs.org/en/download/

**Note :** 
	By default, Node.JS will be installed (for macOS) at: /usr/local/bin/node
	We will need a component of Node.JS named “npm” wich is installed by default (for macOS) at : /usr/local/bin/npm
	npm works in a terminal and manage dependences for applications.
	It also allows to install Node.JS available applications/packages from the npm repository.

####List of packages :
* Gulp
* Gulp-Sass
* gulp-minify-css
* gulp-rename
* Bower

####List of libraries : 
* jQuery



##Installation of the packages :

**Warning :** If you already had Node.JS installed on your system, you may need to execute the command "npm cache clean" before installing the dependencies.

When you installed Node.JS, navigate to the directory of the website and install the packages by typing the following commands :

```bash
$ npm install
```
##Installation of the libraries :
**Note (again) :**
	The website require JQuery for scrolling animations and we will use Bower to get this library. 
  Use npm again to install bower
  
 **Warning :** You may need to run this command as root/administrator
```bash
$ npm install -g bower
```

Now use bower to install JQuery with the following command : 
```bash
$ bower install jquery
```

##Compile the sass to get the stylesheet :

Finally, use the following command to compile the Sass into two files styles.css and styles.min.css :
```bash
$ gulp
```

##Launch the website :

You may now open the file index.html with your browser to see the website.
