Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#index'

  resources :quiz, only: [:index, :show, :create, :update, :destroy]
  resources :question, only: [:index, :show, :create, :update, :destroy]
  resources :possibility, only: [:index, :show, :create, :update, :destroy]
end
