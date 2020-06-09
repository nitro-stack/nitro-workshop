(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{265:function(t,s,a){"use strict";a.r(s);var e=a(4),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1-bootstrap-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-bootstrap-project"}},[t._v("#")]),t._v(" 1. Bootstrap project")]),t._v(" "),a("p",[t._v("First, let's create a new folder in which we will put our server code.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" funpets\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" funpets\n")])])]),a("h2",{attrs:{id:"create-the-server-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-server-app"}},[t._v("#")]),t._v(" Create the server app")]),t._v(" "),a("p",[t._v("Use the following commands to install the NestJS CLI and create a new server app:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @nestjs/cli\nnest new funpets-server\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" funpets-server\n")])])]),a("p",[t._v("It will create the base project configuration and install packages. Once it's done, you can test if it's working correctly by running the command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),a("p",[t._v("It should start the server and print some logs in the console once it's started. Open a new terminal and run this command to check that it's responding:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:3000\n")])])]),a("p",[t._v("You should see "),a("code",[t._v("Hello World!")]),t._v(" in the console if everything works well.")]),t._v(" "),a("h2",{attrs:{id:"add-your-first-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-your-first-endpoint"}},[t._v("#")]),t._v(" Add your first endpoint")]),t._v(" "),a("p",[t._v("We can use the NestJS CLI again to create a new controller:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("nest generate controller stories\n")])])]),a("p",[t._v("Open the file "),a("code",[t._v("src/stories/stories.controller.ts")]),t._v(" and add this pet fun facts list after the imports:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Some cat facts, courtesy of https://catfact.ninja")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" funFacts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cats have supersonic hearing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"On average, cats spend 2/3 of every day sleeping. That means a nine-year-old cat has been awake for only three years of its life."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A cat uses its whiskers for measuring distances. The whiskers of a cat are capable of registering very small changes in air pressure."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A healthy cat has a temperature between 38 and 39 degrees Celcius."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jaguars are the only big cats that don\'t roar."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Cats have 'nine lives' thanks to a flexible spine and powerful leg and back muscles\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The cat\'s tail is used to maintain balance."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"The technical term for a cat’s hairball is a 'bezoar.'\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A happy cat holds her tail high and steady."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A cat can jump 5 times as high as it is tall."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Then add a new method in the existing "),a("code",[t._v("StoriesController")]),t._v(" class, like this:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stories'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StoriesController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'random'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRandomStory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" funFacts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" funFacts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Finally, add "),a("code",[t._v("Get")]),t._v(" to the existing import so we can use this annotation:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Now let's break down what we just did:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("The "),a("code",[t._v("@Controller()")]),t._v(" annotation specifies that this class will handle incoming "),a("strong",[t._v("requests")]),t._v(" and return "),a("strong",[t._v("responses")]),t._v(" to the client. The optional argument "),a("code",[t._v("'random'")]),t._v(" used here will be used as the base "),a("strong",[t._v("route")]),t._v(" prefix for all handlers defined within that class.")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("code",[t._v("@Get()")]),t._v(" annotation defines a new HTTP GET request handler, creating a new endpoint. The optional argument "),a("code",[t._v("'random'")]),t._v(" will be used as a path for this endpoint.")])])]),t._v(" "),a("p",[t._v("Combining the controller path prefix with our request handler path, NestJS will create the "),a("code",[t._v("GET /stories/random")]),t._v(" HTTP endpoint.")]),t._v(" "),a("p",[t._v("This endpoint will return a status code "),a("code",[t._v("200")]),t._v(" and the associated response, which in our case is just a string.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("You can look at the NestJS "),a("a",{attrs:{href:"https://docs.nestjs.com/controllers",target:"_blank",rel:"noopener noreferrer"}},[t._v("controller documentation"),a("OutboundLink")],1),t._v(" for the list of all annotations and options that can be used to define endpoints.")])]),t._v(" "),a("h2",{attrs:{id:"add-a-global-api-prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-global-api-prefix"}},[t._v("#")]),t._v(" Add a global API prefix")]),t._v(" "),a("p",[t._v("A common good practice is to define a global path prefix for all your endpoints, making it easy to later version your API or expose it alongside static assets.")]),t._v(" "),a("p",[t._v("You can do this in NestJS by editing the "),a("code",[t._v("src/main.ts")]),t._v(" and call the "),a("code",[t._v("setGlobalPrefix()")]),t._v(" method after the app creation:")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NestFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGlobalPrefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("After this change, our HTTP endpoint will be "),a("code",[t._v("GET /api/stories/random")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"run-the-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-server"}},[t._v("#")]),t._v(" Run the server")]),t._v(" "),a("p",[t._v("Our server is now ready for local testing, start it with the command:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" start\n")])])]),a("p",[t._v("After the server is started, you can test if our API is responding correctly using "),a("code",[t._v("curl")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:3000/api/stories/random\n")])])]),a("p",[t._v("You should see a random cat fact in the console each time you invoke this command. You now have a working API! 🎉")]),t._v(" "),a("p",[t._v("Ok, this was just the warmup to get a hand of the NestJS API, now let's deploy what we just built before moving on to more serious stuff 💪.")]),t._v(" "),a("br"),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("Solution:")]),t._v(" see the "),a("a",{attrs:{href:"https://github.com/nitro-stack/nitro-workshop/tree/step1",target:"_blank",rel:"noopener noreferrer"}},[t._v("code for step 1"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);