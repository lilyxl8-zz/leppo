json.title @category.title
json.created_at @category.created_at
json.updated_at @category.updated_at
json.id @category.id
json.feeds @category.feeds do |feed|
  json.ig_user feed.ig_user
  json.country_id feed.country_id
  json.id feed.id
  json.posts feed.posts do |post|
    json.id post.id
    json.full_img post.full_img
    json.thumb_img post.thumb_img
    json.created_time post.created_time
    json.caption post.caption
  end
end
