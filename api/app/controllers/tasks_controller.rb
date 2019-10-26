class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render json: @tasks
  end

  def show
    @task = Task.find(params[:id])
    render json: @task
  end

  def create
    @task = Task.create(task_params)
    render json: @task
  end

  def update
    @task = Task.find(params[:task][:id])
    @task.update(task_params)
    render json: @task
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      head :no_content, status: :ok
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  private

  def task_params
    params.require(:task).permit(
      :title,
      :detail,
      :status,
    )
  end
end
