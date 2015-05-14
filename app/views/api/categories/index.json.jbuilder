json.array! @categories.each do |category|
  json.extract! category, :title, :id, :created_at, :updated_at
  json.feeds category.feeds do |feed|
    json.extract! feed, :ig_user, :country_id, :id
    json.posts feed.posts do |post|
      json.extract! post, :id, :full_img, :thumb_img, :created_time, :caption
      json.author post.feed.ig_user
    end
  end
end
