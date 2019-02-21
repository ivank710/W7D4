class Api::PartiesController < ApplicationController
  def index
    @parties = Party.all
    render :index
  end

  def show
    @party = Party.find_by(id: params[:id])
    @parties = Party.all
    render :show
  end
end
