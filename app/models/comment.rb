class Comment < ActiveRecord::Base
  validates :post_id, presence: true
  validates :author_id, presence: true
  validates :body, presence: true

  belongs_to :post
  belongs_to :user, foreign_key: :author_id

  def author
    user.email
  end
end
