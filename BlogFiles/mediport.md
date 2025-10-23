**[10/23/2025, 9:10:59 PM]**
ok so lets get started with it 

pharmacy - pharmacy01, 123
supplier - supplier01, 123
organization - org01, 123


All good it is working now

**[10/20/2025, 11:19:43 PM]**
Okay so project is crated and i wanna make the folder structure. Mainly service, model, repository, controller

and another folder for static files too fk yeah.

BRICK BY BRICK

Okay so an issue the application is not staarting cause there is not database configured to it so just gotta work with the `application property` file. lets see

yeah so we gotta write this stuff inside the file :

```
spring.datasource.url=jdbc:mysql://localhost:3306/mediport
spring.datasource.username=root
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
after this gotta run one more

Ok so yeah , the above config , thinks that a db named mediport is already there inside the database so lol , we gotta crate one 

CREATE DATABASE mediport;

run the above command and boom we are good to go
lets seeeeeeeee.......

okay good it shows on port 8080 a white label error so the apps up and running

The apps runs on 8080 , and the jdbc port is on 3306, since we used - jdbc:mysql://localhost:3306/mediport

**[10/20/2025, 10:42:31 PM]**
okay so yeah , im just planning to clone our mediport project in java springboot. Because the fk im not gonna learn node js because i find javascript really a heavy lift. Im gonna fw java.

So spring boot, i have the backend configuration of my mediport project which is my college backend project ill just kinda clone it and then in future if any updations needed ill do that.

And first of all i'll look into the database structure and identify it cool

**[10/12/2025, 6:04:15 PM]**
lets look into next

**[10/12/2025, 6:03:55 PM]**
We are gonna first note down the essential systems in this project , the main functions and stuff

This file tracks the content for the mediport (one stop note)

