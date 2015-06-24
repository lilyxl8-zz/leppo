json.extract! @feed, :ig_user, :id
json.country @feed.country_name
json.category @feed.category_title
json.posts @feed.posts, partial: 'api/posts/post', as: :post
