# api-admin-cms

this is part of furniture shop system. this project is the backend api for admin cms.
...

## how to run

-clone the project and go inside the root folder
-run `npm install`
-run `npm run dev` , please run `npm i nodemon` if you already dont have the nodemon installed.

## APIS

All the api will follow the following path `${rootUrl}/api/v1` ie. http://localhost

....

## User API

All user API will following the endpoint `${rootUrl}/api/v1/user`

| #   | API | METHOD | DESCRIPTION                                                                 |
| --- | --- | ------ | --------------------------------------------------------------------------- |
| 1   | `/` | POST   | Expects the user info object and creats user in DB and return start message |
