json.array! @comments do |comment|
  json.extract! comment, :id, :author, :post_id, :body
end
