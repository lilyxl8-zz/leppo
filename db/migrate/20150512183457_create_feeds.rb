class CreateFeeds < ActiveRecord::Migration
  def change
    create_table :feeds do |t|
      t.string :ig_user, null: false
      t.integer :category_id, null: false
      t.integer :country_id, null: false

      t.timestamps
    end

    add_index :feeds, :country_id
    add_index :feeds, :category_id
    add_index :feeds, :ig_user, unique: true
  end
end
