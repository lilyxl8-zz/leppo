class CountriesController < ApplicationController
  def show
    @country = Country.find(params[:id])
    render :show
  end

  private
  def country_params
    params.require(:country)
  end
end
