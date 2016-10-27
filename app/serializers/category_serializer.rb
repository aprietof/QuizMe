class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :quizzes
end
