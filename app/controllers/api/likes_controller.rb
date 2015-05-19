module Api
  class LikesController < ApiController
    def create
      @feed = Feed.new(feed_params)

      if @feed.save
        @feed.get_posts
        render json: @feed
      else
        render json: @feed.errors.full_messages, status: :unprocessable_entity
      end
    end

    private
    def like_params
      params.require(:like).permit(:post_id)
    end
  end
end
