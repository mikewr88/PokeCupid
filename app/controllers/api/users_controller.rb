class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def index

    @users = User.all
    render 'api/users/index'
  end

  def show

  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :gender, :location, :trainer_type)
  end
end
