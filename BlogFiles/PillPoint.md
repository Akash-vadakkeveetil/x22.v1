**[3/9/2025, 10:22:28 PM]**
ayyyyyyy wait wut happens if i push code to github and see whether this page is getting rendered or not  llets check , for that first i have to make a link to this page for it ... wait there is a bloggin secotin for my official blogs displaying i aint writing in thsi website , im planning to write this in medium so ill give it a try

**[3/9/2025, 10:20:49 PM]**
No importing works here gotta do all things by scratch like have to cross verify each and every stuff one by one , hectic thing to do it is

**[3/9/2025, 10:16:12 PM]**
many smol smol error resolving each one by one lol

**[3/9/2025, 9:34:25 PM]**
the code of all tables have been written and now handling with this one to many and many to one type shi

**[3/9/2025, 7:52:42 PM]**
so a normal supplier table similiar to the pharmacy table , an intermediate table and also an orders table will do the job , cause this will be a many to many relationship , now letss just code it up and make the databsee completelly working like all checked and then implemenet the API

**[3/9/2025, 7:49:39 PM]**
now this is set and lets think about supplier , supplier or manufacturer guy can supply mediciens to mulitple pharmacies so gotta make the table with that

**[3/9/2025, 7:43:44 PM]**
now we dont store anything in our pharmacy table instead we store it in a intermediate table , but it have an expiry date each batch will have different expriy so we gotta track it separately by batch hmmmm

**[3/9/2025, 7:36:22 PM]**
Since one pharmacy can have multiple medicines, and one medicine can exist in multiple pharmacies, we have a Many-to-Many relationship between pharmacies and medicines.  To handle this efficiently, we should introduce an intermediate table (junction table), let’s call it Pharmacy_Medicine_Stock.Thinking this way and lets try to u know aling it with oru logic

**[3/9/2025, 7:26:22 PM]**
thinkng about the pharmacies or hospitals things it needed are basic things like name,id,location,address,licencse etc a pharmacy should maintain the medicine stock right there will be multiple medicines and each pharmacy should maintain a medicine table row so now gotta work on that medicine table row, like a row exclusively for this particular pharmacy

**[3/9/2025, 7:24:08 PM]**
admin table is done like it only need a user name , password and some admin id or something

**[3/9/2025, 6:47:00 PM]**
also having a common single table will be a bad idea because since many of them have very differenet fileds the amount of null value willl be higher and hence becommes slow ineffecient etc

**[3/9/2025, 6:44:26 PM]**
so thought about creating a single users table that aint gonna sell because like the details of each and evrey role is different so came to a conclusion that gotta create 3 tables for different 3 roles

**[3/9/2025, 5:00:57 PM]**
we are implementing a homme page just the html stuff , the first page will be a home page - we are gonna get directed to the login page in which we login as the normal user now gotta add the register if not a user , 3 roles admin,supplier and pharmacies(hospitals)

**[3/9/2025, 9:27:10 AM]**
im tired of selecting this shit each and every time lmma create a backend for it easyily and configure this to that , like it is kinda annoying that each time i have to select the file when i want to update and also cant hit enter , but i also gotta work on this project and update my resume mmmmmm so ill go with the flow gotta look on some of the update of the pill point and then soemtimes im gonna work on this and change it to a u know backkend something either on spring boot or any other free hosting type shit , im want to use hugo but im too lazy to configure it and stuff and alll lol so first let me go thorugh the things which i have worked on this project till now and then imma do with this and then finally imma work on this file , but when i am working on this there is so many issues to this too , i create this for my own personal track record to see what am i working on and all like a not common blogging stuff ,lets see anyways whether i can get a free scalable and a robust backend service

**[3/9/2025, 9:22:33 AM]**
Ok so lets check what all things are implemented here one by one - this may get entered as a next line lol

**[3/9/2025, 12:39:36 AM]**
- aaha so the spring boot file is set , lke we have made a project
- all the readme stuff is updated like what all are the details and some api endpoints are also defined here lol 
- many models are defined and some controllers too so now i say we gotta make it to the controller and stuff right
- also many roles are defined , i need to check based on what are these roles defined or so

**[3/9/2025, 12:36:38 AM]**
The thing is that its is already kind implemented in the node js u know , but what is say is that i have to implement it from scratch using java yeeesss, gootta get the hands dirty so lets begin from the db design to everything lets walk throught this shit

**[3/9/2025, 12:35:21 AM]**
Ok so lets start lets cook the pill point

