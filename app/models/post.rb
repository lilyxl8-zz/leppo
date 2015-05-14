class Post < ActiveRecord::Base
  validates :feed_id, presence: true
  validates :full_img, presence: true, uniqueness: true
  validates :thumb_img, presence: true, uniqueness: true
  validates :created_time, presence: true, uniqueness: true

  belongs_to :feed

  def author
    feed.ig_user
  end
end
