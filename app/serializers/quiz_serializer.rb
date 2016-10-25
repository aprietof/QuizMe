class QuizSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image
  has_many :questions
end
