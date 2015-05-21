module Api
  class PostsController < ApiController
    def create
      @post = Post.new(post_params)

      if @post.save
        render json: @post
      else
        render json: @post.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @posts = Post.all
      render :index
    end

    def show
      @post = Post.find(params[:id])
      render :show
    end

    def like
      if signed_in?
        @post = Post.find(params[:post_id])
        @like = Like.find_by(post_id: @post.id, user_id: current_user.id)

        if @like
          @like.destroy!
          render :show
        else
          current_user.likes.create!(post_id: @post.id)
          render :show
        end
      else
        render json: {}
      end
    end

    private
    def post_params
      # has title?
      params.require(:post).permit(:title, :feed_id, :ig_url)
    end
  end
end
