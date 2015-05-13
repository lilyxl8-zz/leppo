class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :thumb_img, null: false
      t.string :full_img, null: false
      t.integer :feed_id, null: false
      t.integer :created_time, null: false
      t.text :caption

      t.timestamps
    end

    add_index :posts, :feed_id
    add_index :posts, :created_time
    add_index :posts, :full_img, unique: true
  end
end
