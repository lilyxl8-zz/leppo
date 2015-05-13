json.name country.name
json.created_at country.created_at
json.updated_at country.updated_at
json.id country.id
json.feeds country.feeds do |feed|
  json.ig_user feed.ig_user
  json.category_id feed.category_id
  json.id feed.id
  json.posts feed.posts do |post|
    json.id post.id
    json.full_img post.full_img
    json.thumb_img post.thumb_img
    json.created_time post.created_time
    json.caption post.caption
  end
end
