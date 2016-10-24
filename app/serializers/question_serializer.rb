class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :text, :answered, :selected, :correct, :answer, :quiz_id
  has_one :quiz
  has_many :possibilities
end
