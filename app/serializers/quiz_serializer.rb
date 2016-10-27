class QuizSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image, :category
  has_many :questions
  has_one :category
end
