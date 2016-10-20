class QuizSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_many :questions
end
