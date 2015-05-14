json.extract! category, :title, :created_at, :updated_at, :id
json.feeds category.feeds do |feed|
  json.extract! feed, :ig_user, :id, :country_id, :category_id
end
json.posts category.posts, partial: 'api/posts/post', as: :post
