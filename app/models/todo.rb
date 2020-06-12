class Todo < ApplicationRecord
    validates :body, :title, presence: true 
    validates :done, inclusion: {in: [true, false]}
    # validates :body, :title, presence: true 
    # validates :done, inclusion: {in: [true, false]}
    # validates :body, :title, presence: true 
    # validates :done, inclusion: {in: [true, false]}
end
