json.extract! feed, :ig_user, :id, :country_id, :category_id
json.posts feed.posts, partial: 'api/posts/post', as: :post
