class Api::VisitsController < ApplicationController
  def create
    @visit = Visit.new(visit_params)

    if @visit.save
      render json: @visit
    else
      @errors = @visit.errors.full_messages
      render 'api/visits/error', status: 422
    end

  end

  def destroy
    @visit = Visit.find_by(visit_params)

    if @visit.destroy
      render json: @visit, status: 200
    else
      @errors = visit.errors.full_messages
      render 'api/visits/error', status: 422
    end
  end

  def index
    @visitor = current_user
    render 'api/visits/index'
  end

  private

  def visit_params
    params.require(:visit).permit(:visitor_id, :visitee_id)

  end
end
