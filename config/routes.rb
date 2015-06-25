Rails.application.routes.draw do
  root to: 'static_pages#root'

  get "/auth/:provider/callback", to: "api/sessions#omniauth"

  resources :users, only: [:create, :new]
  resource :session, only: [:create, :new, :destroy]

  # resources :feeds, only: [:new, :create, :show]
  # resources :countries, only: [:new, :create, :show]
  # resources :categories, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:index, :show, :create]

    resources :categories, only: [:index, :create, :show]
    get 'categoryShow' => 'categories#show'

    resources :countries, only: [:index, :create, :show]
    get 'countryShow' => 'countries#show'

    resources :feeds, only: [:index, :create, :update, :show]
    resources :posts, except: [:new, :edit] do
      collection do
        post :toggle_like
        get :liked_posts
      end
    end
    resources :comments, except: [:new, :edit]
  end
end
