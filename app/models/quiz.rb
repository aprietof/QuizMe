class Quiz < ApplicationRecord
  validates_presence_of :category
  has_many :questions, dependent: :destroy
  belongs_to :category
end
