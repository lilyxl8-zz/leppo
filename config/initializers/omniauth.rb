Rails.application.config.middleware.use OmniAuth::Builder do
  provider :instagram, ENV[542116928d5047218ea73bc368729081], ENV[68ac02610ecc47e9bb8ab177ba2df0f4]
end
