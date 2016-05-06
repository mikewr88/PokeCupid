Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :destroy]
    resources :users, only: [:index]
    resources :visits, only: [:create, :destroy, :index]
    resources :likes, only: [:create, :index]
    resource :like, only: [:destroy]
    resource :session, only: [:create, :destroy, :show]
  end
end
