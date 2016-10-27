Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  resources :quizzes, :questions, :possibilities, only: [:index, :show, :create, :update, :destroy]

  resources :categories, only: [:index]
end
