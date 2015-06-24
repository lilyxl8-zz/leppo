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
      render :index
    end

    def show
      if params[:id]
        @category = Category.includes(:feeds).find(params[:id])
      else
        @category = Category.includes(:feeds).find_by name: params[:name].capitalize
      end
      render :show
    end

    private

    def category_params
      params.require(:category).permit(:name)
    end
  end
end
