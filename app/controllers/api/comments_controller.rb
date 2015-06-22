module Api
  class CommentsController < ApiController
    def create
      @comment = Comment.new(comment_params)

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @comments = Comment.all
      render :index
    end

    def show
      @comment = Comment.find(params[:id])
      render :show
    end

    private
    def comment_params
      params.require(:comment).permit(:title, :feed_id, :ig_url)
    end
  end
end
