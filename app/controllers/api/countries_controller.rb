module Api
  class CountriesController < ApiController
    def create
      @country = Country.new(country_params)

      if @country.save
        render json: @country
      else
        render json: @country.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @countries = Country.all
      render :index
    end

    def show
      @country = Country.find(params[:id])
      render :show
    end

    private

    def country_params
      params.require(:country).permit(:name)
    end
  end
end
