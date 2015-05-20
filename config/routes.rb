Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session, except: [:update, :edit]

  resources :feeds, only: [:new, :create, :show]
  resources :countries, only: [:new, :create, :show]
  resources :categories, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :create, :show]
    get 'categoryShow' => 'categories#show'

    resources :countries, only: [:index, :create, :show]
    resources :feeds, only: [:new, :edit]
    resources :posts, except: [:new, :edit] do
      post :like
    end
    resources :likes, only: [:create, :destroy]
  end
end
