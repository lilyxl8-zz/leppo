json.ig_user @feed.ig_user
json.country_id @feed.country_id
json.category_id @feed.category_id
json.id @feed.id
json.posts @feed.posts do |post|
  json.ig_url post.ig_url
  json.feed_id post.feed_id
  json.id post.id
end
