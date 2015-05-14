json.extract! country, :name, :created_at, :updated_at, :id
json.feeds country.feeds do |feed|
  json.extract! feed, :ig_user, :id, :country_id, :category_id
end
json.posts country.posts, partial: 'api/posts/post', as: :post
