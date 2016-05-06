class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render json: {message: @errors}, status: 422
    end
  end

  def index
    if query_exists?
      @users = User.where("users.username ILIKE :q", q: "#{query_param}%")
    else
      @users = User.all
    end
    render 'api/users/index'
  end

  def show
    @user = User.find(params[:id])
    render "api/visits/show"
  end

  def query_exists?
    params[:search] && params[:search] != ""
  end

  private

  def query_param
    params[:search]
  end

  def user_params
    params.require(:user).permit(:username, :password, :gender, :location, :trainer_type, :image_url, :description)
  end
end
