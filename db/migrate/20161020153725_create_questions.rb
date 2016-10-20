class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.text :text
      t.integer :answered
      t.boolean :selected, :default => false
      t.boolean :correct, :default => false
      t.integer :answer
      t.integer :quiz_id

      t.timestamps
    end
  end
end
