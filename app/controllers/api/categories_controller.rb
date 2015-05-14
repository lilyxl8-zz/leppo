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
      @categories = Category.all
      render json: @categories
    end

    def show
      @category = Category.includes(:feeds).find(params[:id])

      render :show
    end

    private

    def category_params
      params.require(:category).permit(:title)
    end
  end
end
