module Api
  class CategoriesController < ApiController
    def create
      @category = Category.new(category_params)

      if @category.save
        render json: @category
      else
        render json: @category.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @category = Category.find(params[:id])
      @category.try(:destroy)
      render json: {}
    end

    def index
      Feed.update_all if Feed.first.updated_at < 30.minutes.ago
      @categories = Category.all
      render :index
    end

    def show

      if params[:id]
        @category = Category.includes(:feeds).find(params[:id])
      else
        @category = Category.includes(:feeds).find_by title: params[:title].capitalize
      end
      render :show
    end

    private

    def category_params
      params.require(:category).permit(:title)
    end
  end
end
