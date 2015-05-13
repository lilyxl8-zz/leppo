class FeedsController < ApplicationController
  def new
    render :new
  end

  def create
    @feed = Feed.new(feed_params)

    if @feed.save
      render json: @feed
    else
      render json: @feed.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @feed = Feed.find(params[:id])

    render :show
  end

  private

  def feed_params
    params.require(:feed).permit(:ig_user, :country_id, :category_id)
  end
end
