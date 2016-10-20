class Question < ApplicationRecord
  belongs_to :quiz
  has_many :possibilities, dependent: :destroy
end
