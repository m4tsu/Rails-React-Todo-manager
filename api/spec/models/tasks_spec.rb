require 'rails_helper'

RSpec.describe Task, type: :model do
  describe 'validation' do
    it 'is valid with title and content' do
      # task = FactoryBot.build(:task)
      task = Task.new(title: 'title1', content: 'content1')
      expect(task).to be_valid
    end

    it 'is invalid without title' do
      task = build(:task, :without_title)
      task.valid?
      expect(task.errors[:title]).to include("can't be blank")
    end

    it 'is invalid without content' do
      task = build(:task, :without_content)
      task.valid?
      expect(task.errors[:content]).to include("can't be blank")
    end
  end
end