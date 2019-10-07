class Task < ApplicationRecord
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def create
    @tasks = Task.all
    render json: @tasks
  end
end
