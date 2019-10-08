class Task < ApplicationRecord
  validates :title, presence: true, length: {maximum: 256}
  validates :content, presence: true
  validates :status, presence: true, numericality: true
end
