json.extract! post, :id, :full_img, :thumb_img, :created_time, :caption, :author, :country, :category, :like_count
json.likers post.likers do |liker|
  json.email liker.email
end
