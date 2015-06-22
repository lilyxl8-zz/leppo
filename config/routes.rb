Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  # resources :feeds, only: [:new, :create, :show]
  # resources :countries, only: [:new, :create, :show]
  # resources :categories, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    resources :categories, only: [:index, :create, :show]
    get 'categoryShow' => 'categories#show'

    resources :countries, only: [:index, :create, :show]
    get 'countryShow' => 'countries#show'

    resources :feeds, only: [:index, :create, :update]
    resources :posts, except: [:new, :edit] do
      collection do
        post :like
      end
    end
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end
end
