module Api
  class CommentsController < ApiController
    def create
      @comment = Comment.new(comment_params.merge({ author_id: current_user.id }))

      if @comment.save
        render :show
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

    def update
      #TODO
    end

    private
    def comment_params
      params.require(:comment).permit(:post_id, :body)
    end
  end
end
