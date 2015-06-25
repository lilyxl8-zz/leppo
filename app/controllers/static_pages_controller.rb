class StaticPagesController < ApplicationController
  # before_action :require_signed_in!

  def root
    if params[:code]
      resp = RestClient.post 'https://api.instagram.com/oauth/access_token', {
        client_id: '542116928d5047218ea73bc368729081',
        client_secret: '68ac02610ecc47e9bb8ab177ba2df0f4',
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3000',
        code: params[:code]
      }
    end
  end
end
