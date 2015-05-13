Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, except: [:update, :edit]

  resources :feeds, only: [:new, :create, :show]
  resources :countries, only: [:new, :create, :show]
  resources :categories, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :create, :show]
    resources :countries, only: [:index, :create, :show]
    resources :feeds, only: [:index, :create, :update, :destroy]
    resources :posts, only: [:create, :update, :destroy]
  end
end
