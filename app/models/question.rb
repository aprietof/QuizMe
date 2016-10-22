class Question < ApplicationRecord
  belongs_to :quiz
  has_many :possibilities, dependent: :destroy
  accepts_nested_attributes_for :possibilities, :allow_destroy => true
end
