# blogapp-api
## Deployed on Heroku

- https://blog-app-ee678.herokuapp.com/posts

## Notes
### Security
The endpoints are secured by Firebase authentication, you need to login in this UI: https://blog-app-ee678.web.app/ to retrieve a token
### Database
The database is a MongoDB in memory just to don't spend time on it.

## Challenge's points done
* Create posts
* List posts
* Delete posts
* Unit Tests / Integration Tests / E2E tests (a little)
* Identify the author with some kind of authentication: only they can create posts under their name
* Allow for different states of a post:
  *  Private: only the author can see them, they appear in the author's blog only if the logged in user is the author
  *  Public: everyone can see them
* Text search

### Related repository (UI):
https://github.com/fabrizioparodi/blogapp-ui
