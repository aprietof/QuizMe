class Question < ApplicationRecord
  belongs_to :quiz
  has_many :possibilities, :inverse_of => :question, dependent: :destroy
  accepts_nested_attributes_for :possibilities, :allow_destroy => true
end
