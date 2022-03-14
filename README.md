# Angular_Firebase test
## firebase auth test

1. firebase auth 설정
- email / password 사용 설정
- web 설정 

2. angular new project 
- ng new <프로젝트> 

3. angular에 firebase dependency install
- ng add @angular/fire 

4. (option) angular material or bootstrap install
- ng add @angular/material 
- npm install @ng-bootstrap/ng-bootstrap

5. new component create
- ng g c <컴포넌트명>
- home
    -> dashboard
    -> sign up
    -> login 

6. new serivce create
- ng g s service services/auth

7. new guard create
- ng g guard services/auth

8. angular template update
- FormControl, FormGroup, Validator 유효성
- input tag , button , ngSubmit
- button routerlink setting

9. auth service update 
- angularFirebaseAuth 
- auth createUserWithEmailAndPassword use
- auth signInWithEmailAndPassword use

10. auth guard setting
- User doesn't login -> Block the dashboard
- User logged in -> Access to the dashboard