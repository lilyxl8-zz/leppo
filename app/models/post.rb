class Post < ActiveRecord::Base
  validates :feed_id, presence: true
  validates :full_img, presence: true, uniqueness: true
  validates :thumb_img, presence: true, uniqueness: true
  validates :created_time, presence: true

  belongs_to :feed

  has_many :likes
  has_many :likers, through: :likes, source: :user

  def author
    feed.ig_user
  end

  def country
    feed.country.name
  end

  def category
    feed.category.title
  end

  def like_count
    likes.count
  end
end
