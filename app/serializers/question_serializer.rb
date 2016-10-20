class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :text, :answered, :selected, :correct, :answer
  has_one :quiz
  has_many :possibilities
end
