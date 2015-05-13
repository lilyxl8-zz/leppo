# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150512183615) do

  create_table "categories", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "categories", ["title"], name: "index_categories_on_title", unique: true

  create_table "countries", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "countries", ["name"], name: "index_countries_on_name", unique: true

  create_table "feeds", force: :cascade do |t|
    t.string   "ig_user",     null: false
    t.integer  "category_id", null: false
    t.integer  "country_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "feeds", ["category_id"], name: "index_feeds_on_category_id"
  add_index "feeds", ["country_id"], name: "index_feeds_on_country_id"

  create_table "posts", force: :cascade do |t|
    t.string   "thumb_img",    null: false
    t.string   "full_img",     null: false
    t.integer  "feed_id",      null: false
    t.integer  "created_time", null: false
    t.text     "caption"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "posts", ["created_time"], name: "index_posts_on_created_time"
  add_index "posts", ["feed_id"], name: "index_posts_on_feed_id"
  add_index "posts", ["full_img"], name: "index_posts_on_full_img", unique: true

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email"
  add_index "users", ["session_token"], name: "index_users_on_session_token"

end
