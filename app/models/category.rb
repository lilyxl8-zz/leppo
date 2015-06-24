class Category < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :feeds
  has_many :posts, through: :feeds

  def latest_posts
    if updated_at < 1.day.ago
      feeds.each do |feed|
        feed.get_posts
      end
    end
  end

  def preview_posts
    return posts[0..3]
  end
end
