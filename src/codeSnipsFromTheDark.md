# Code Snippets for reference
This a pretty bland and dry bit of text. This file will contain several code snippets for easy reference for concepts used in our project, nutshell. This file is not intended for distrabution and is written casually. So, back off grammar and spelling nazis (and all nazis in general).  I am using Dillinger.io to write the mark down file. It's default welcome page contents are below the code i will be writing for reference on how to write a mark down file. 

### Body Bubbling Event Listeners
Body bubbling is a techinque that was really briefly talked about in class. I think two spoken sentences were dedecated to it and it's referenced in book 3 chapter Handling Browser Events with JavaScript in the eventhandlers.js file. I dont know how to make the code snippets different colors yet so this cut and paste is going to be ugly:

/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
document.querySelector("body").addEventListener("click", function(event) {
    console.log("You clicked on the body of the DOM")
})

Yep, looks pretty dry and doesn't help in actually applying it. I have used in in a previous project and it looked like this:
```javascript
const loadForm = require("./form");
const loadMain = require("./loadMain");
DS_Storeconst save = require("./save");

const body = document.querySelector("body");
body.addEventListener("click", () => {
  if (event.target.id === "cancel") {
    loadMain();
  } else if (event.target.id === "create") {
    loadForm();
  } else if (event.target.id === "save") {
    save();
    console.log("Save complete");
    loadMain();
    console.log("Load complete");
  }
});
```
Great news everyone! I learned how to mark javascript in markdown!. Eat it, markdown code nazis.
So from the example above you can how it was better appilied and what happens when a user clicks on a part of the body that has an id. 
The libary i am at is closing and i still need to cover how some of the databse methods should look like espically since we will end up with many databses in that one json file. I will try to cover more later but it is not likely. I just hope i don't forget before tomorrow.

### Clear
```javascript
const clear = () => {
    const container = document.querySelector("#container");
    while (container.firstElementChild){
        container.removeChild(container.firstElementChild);
    };
};

module.exports = clear;
```
### Example for toUpperCase
```javascript
function returnBuilder(){
    let customerInput = document.getElementById("customerName");
    let titleInput = document.getElementById("titleOfBook");
    let authorInput = document.getElementById("authorOfBook");
    if(customerInput.value.length > 1 && titleInput.value.length > 1 && authorInput.value.length > 1){
        if(document.getElementById("error")){
            document.getElementsByClassName("builder")[0].removeChild(document.getElementById("error"));
        }
        let validTitle = false;
        let validAuthor = false;
        let validCustomer = false;

        let cTitle = "";
        let cAuthor = "";
        let cCustomer = "";
        let bookObj = {};

        for(person in customers){
            let fullName = customers[person].firstName + " " + customers[person].lastName;
            if(fullName.toUpperCase() == customerInput.value.toUpperCase()){
                validCustomer = true;
                cCustomer = person;
                for(let i = 0; i < customers[person].bookshelf.length; i++){
                    if(customers[person].bookshelf[i].title.toUpperCase() == titleInput.value.toUpperCase()){
                        validTitle = true;
                        cTitle = customers[person].bookshelf[i].title;
                        bookObj= customers[person].bookshelf[i];
                        if(customers[person].bookshelf[i].author.toUpperCase() == authorInput.value.toUpperCase()){
                            validAuthor = true;
                            cAuthor = customers[person].bookshelf[i].author;
                        }
                    }
                }
            }
        }

        

        
         if(validCustomer == false){
            console.log("error not a valid customer")
            let error = document.createElement("p");
            error.textContent = "There is no customer by that name"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
         } else if (validTitle == false){
            console.log("error bad title")
            let error = document.createElement("p");
            error.textContent = "Title does not exist in bookshelf"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
        } else if(validAuthor == false){
            console.log("error bad author")
            let error = document.createElement("p");
            error.textContent = "There is no book by that title with that author"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
        } else {
            returnBook(cTitle, cAuthor, cCustomer);

            let log = document.createElement("section");
            log.id = "bookShelfDisplay";
            let p1 = document.createElement("p");
            p1.textContent = "You returned a book!"
            let p2 = document.createElement("p");
            p2.textContent = `Thank you ${customerInput.value} for returning ${titleInput.value} by ${authorInput.value}.`
            log.appendChild(p1);
            log.appendChild(document.createElement("br"))
            log.appendChild(p2);
            DOMBuilder(log);
        }

        

    } else {
        console.log("error")
        let error = document.createElement("p");
        error.textContent = "Please fill out all sections"
        error.id = "error";
        error.style.color = "red";
        DOMBuilder(error);
    }


}
```
### Example of how i accessed json server in small business exercise
```javascript
getEmployeeStatus().then((statusResponse)=>{
    console.log("response",statusResponse)
    statusResponse.forEach(element =>{
        console.log("element employee id",element.employeeId)
        const $artEmployee = $("<article>").addClass("employee")
        getEmployee(element.employeeId).then((employeeResponse) =>{
            console.log(employeeResponse.name)
            $artEmployee.text(employeeResponse.name).appendTo(divRef)
            getDepartment(element.departmentId).then((departmentResponse)=>{
                const $paraDepart =$("<p>").addClass("employee-department").text(departmentResponse.department).appendTo($artEmployee)
                    getComputer(element.computerId).then((computerResponse)=>{
                        const $paraComputer =$("<p>").addClass("employee-computer").text(computerResponse.computer).appendTo($artEmployee)
                    
                })
                
            })
        })
    }
)


})
```





    













# Dillinger

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| Github | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
