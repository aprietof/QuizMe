class Possibility < ApplicationRecord
  belongs_to :question, :inverse_of => :possibilities
end
