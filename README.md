**Securing your Spring Boot and Angular app with JWT**

**Frontend - Angular 7**
 - Angular Material 7.3.7
 - Bootstrap 4.3.1
 - NgBootstrap 4.1.1
 - NGX-Translate 11.0.1
 - NGX-Webstorage 3.0.2
 - RxJS 6.3.3
  
**Backend - Rest Services**
 - Create user: 
	 - POST 
	 - URL: localhost:8080/api/users
	 - BODY: { "userCredentials": { "username": "dromero", "password": "pass" }}

 - Login (get token) 
	 - POST 
	 - URL: localhost:8080/api/login
	 - BODY: { "username": "dromero", "password": "pass" }
