Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  resources :quizzes, only: [:index, :show, :create, :update, :destroy]
  resources :questions, only: [:index, :show, :create, :update, :destroy]
  resources :possibilities, only: [:index, :show, :create, :update, :destroy]
end
