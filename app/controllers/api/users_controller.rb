module Api
  class PostsController < ApiController
    before_action :require_signed_in!, only: [:like, :liked_posts]

    def index
      @posts = Post.all
      render :index
    end

    def show
      @post = Post.find(params[:id])
      render :show
    end

    def toggle_like
      @post = Post.find(params[:post_id])
      @like = Like.find_by(post_id: params[:post_id], user_id: current_user.id)

      if @like
        @like.destroy!
      else
        current_user.likes.create!(post_id: params[:post_id])
      end
      render :show
    end

    def liked_posts
      @posts = current_user.liked_posts
      render :index
    end

    private
    def post_params
      # has title?
      params.require(:post).permit(:title, :feed_id, :ig_url)
    end
  end
end
