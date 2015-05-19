module Api
  class LikesController < ApiController

    def create
      @like = Like.new(like_params.merge({ user_id: current_user.id }))

      if @like.save
        render json: @like
      else
        render json: @like.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy

    end

    private
    def like_params
      params.require(:like).permit(:post_id)
    end
  end
end
