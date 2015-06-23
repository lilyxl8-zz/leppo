json.extract! @post, :id, :full_img, :thumb_img, :created_time, :caption, :author, :country, :category, :like_count, :comment_count, :likers_names
# json.likers @post.likers do |liker|
#   json.email liker.email
# end
json.comments @post.comments do |comment|
  json.body comment.body
  json.author comment.author
  json.id comment.id
end
