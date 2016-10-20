class QuizSerializer < ActiveModel::Serializer
  attributes :id, :title, :desciption
  has_many :questions
end
