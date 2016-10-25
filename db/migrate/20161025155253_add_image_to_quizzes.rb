class AddImageToQuizzes < ActiveRecord::Migration[5.0]
  def change
    add_column :quizzes, :image, :string, :default => "http://cdn2.business2community.com/wp-content/uploads/2015/04/Quiz-300x198.png.png"
  end
end
