class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render json: @like
    else
      @errors = @like.errors.full_messages
      render 'api/likes/error', status: 422
    end

  end

  def destroy
    @like = Like.find_by(like_params)

    if @like.destroy
      render json: @like, status: 200
    else
      @errors = like.errors.full_messages
      render 'api/likes/error', status: 422
    end
  end

  def index
    @liker = current_user
    render 'api/likes/index'
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :likee_id)

  end
end
