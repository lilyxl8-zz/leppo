require 'instagram'

class Feed < ActiveRecord::Base
  ACCESS_TOKEN = "38734087.5421169.569836061a4d4a2eab59d74def5621aa"

  validates :ig_user, presence: true, uniqueness: true
  validates :country_id, presence: true
  validates :category_id, presence: true

  belongs_to :category
  belongs_to :country
  has_many :posts, dependent: :destroy

  def self.update_all
    self.all.each do |feed|
      feed.get_posts
    end
  end

  def get_posts
    client = Instagram.client(:access_token => ACCESS_TOKEN)
    user = JSON.parse(client.user_search(self.ig_user).to_json)[0]

    # TODO raise error
    return unless user
    feed = JSON.parse(client.user_recent_media(user["id"]).to_json, { count: 10 })

    feed.each do |post|
      if post["caption"]
        created_time = post["caption"]["created_time"]
        caption = post["caption"]["text"]
      else
        created_time = post["created_time"]
        caption = ""
      end
      new_post = Post.create(
        feed_id: self.id,
        created_time: created_time,
        caption: caption,
        thumb_img: post["images"]["low_resolution"]["url"],
        full_img: post["images"]["standard_resolution"]["url"] )
      new_post.save
    end

    feed
  end
end
