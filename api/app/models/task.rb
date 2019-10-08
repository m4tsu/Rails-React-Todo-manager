class Task < ApplicationRecord
  enum status: { waiting: 0, working: 1, done: 2, pending: 3 }

  validates :title, presence: true, length: {maximum: 256}
  validates :content, presence: true
  validates :status, presence: true, inclusion: {in: Task.statuses.keys}
end
