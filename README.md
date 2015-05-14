# leppo

[Heroku link][heroku]

[heroku]: http://leppo.herokuapp.com

## Minimum Viable Product
leppo is a Flipboard clone that curates design-related Instagram posts, organized by category and country. (For users: "leppo is the social design magazine that satisfies your wanderlust.") It is built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create feeds (add Instagram feeds to a category)
- [x] Add comments to posts
- [ ] View feeds and posts
- [ ] Like posts
- [ ] Add friends (Facebook graph)
- [ ] See posts their friends have liked
- [ ] Follow a category
- [ ] Follow a country
- [ ] See the # of followers on a category/country

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Models Setup, Feed Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to add feeds using
a simple text form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Feeds and Posts (~2 days)
I will add API routes to serve feed and post data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to add feeds and view both feeds and posts, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Liking and Commenting on Posts (~2 days)
I plan to add routes, views and the appropriate forms for users to like and comment on posts.

[Details][phase-three]

### Phase 4: Following Feeds and Users (~1-2 days)
I'll start by adding a `feed` route that uses the `current_user`'s
`followed_feeds` association to serve a list of feed posts ordered
chronologically. On the Backbone side, I'll make a `FeedShow` view whose `posts`
collection fetches from the new route.  Ultimately, this will be the page users
see after logging in.

[Details][phase-four]

### Phase 5: Adding UI Animations and Effects (~2 days)
I'll need to make sure the navigation bar stays fixed to the top and that the appropriate effects work when users hover over a post thumb (the comment and like buttons appear, the post comes into focus). Also make submitted comments appear instantly on the page. Would be cool to add button hover effects.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] "Like" button and counter for posts
- [ ] Custom blog urls
- [ ] Pagination/infinite scroll
- [ ] Reblogging
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
