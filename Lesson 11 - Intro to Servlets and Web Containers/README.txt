********* Simple Calculator Lab ***********

The lab was pretty straight forward but it took me a lot of time before figuring out why did my application did not run properly. 
I have implemented the calculation in the Servlet inside a doPost method overriden from the HttpServlet class.
But without noticing it, there was a line "super(req, resp)" inside that method which I did not remove. And then made the application behave really differently.
It took me 1 hour to understand that the request being sent was not interecepted by my current servlet but insted the one from the parent class.

But then, everything was working fine. I tried different way to do it but at the end I kept the version which is using WritePrinter class to display the message.



********* Beer Selection Lab **************

In a real application, the server receive request from the browser then these requests are intercepted by a filter which determines which servlet can handle the request according to the url.
The servlet then proceed with the business logic action and forward the request to a JSP the. The JSP retrieves the response and then generate the page that is going to be returned to the http client.

To deploy a web application, we need to use a Tomcat server. With Netbeans, all the deployment steps are already automated. All we need to do is to customize the configuration in order to achieve some deployment specifications.
Without the help of a tool like NetBeans, the way to deploy an application is to manually go to the folder containing the tomcat server, paste a copy of a war file of the application we want to deploy and then configure tomcat to serve that application on a specific port and finally just restart the server.


********* Deployment Lab ******************
1- The directory structure shown on p 30 is a standard way of writing web application which makes it independant from other application. 
For example, we may have multiple application on one tomcat server, but only one application is under the folder Project 1
This is related to the development environment.

2- The directory structure shown on p 31 is the way how Tomcat is organizing and manging the projects that are being deployed on itself.
This structure makes the use of some command easier. 
For example, to run tomcat, we ran the command "startup.sh" inside the Tomcat folder.
To compile the servlet, we run the java command inside the folder with the name of the webapp.
This is related to the deployment environment.

3- We need to be inside the Project 1 folder for step 5 because the targeted java class is inside that folder.

4- Tomcat only scan resources under these folders, thus we need to copy all the relevant files and resources to these location for tomcat to be able to compile and run them.

5- The name of the web app is the same as the war file being deployed on the server. If we want to change the name, we have to rename the war file.

6- Step 9 is necessary because once deployed, the application is not modifiable. In fact, we cannot modify the content of the war file. 
In order to make changes, we have to modify the source code, package it and redeploy into the tomcat server, then restart the server.

7- An interesting point I saw today was with IntelliJ. The build and run configuration features is very flexible. There was an option to run multiple commands before the actual application is deployed onto the server and being served.
