class CategoriesController < ApplicationController
  def show
    category = Category.find(params[:id])
    render :show
  end

  private
  def category_params
    params.require(:category)
  end
end
