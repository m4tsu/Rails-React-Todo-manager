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
    @task = Task.new(task_params)
    if @task.save
      render json: @task, status: :ok
    else
      render json: {}, status: :internal_server_error
    end

  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render json: @task, status: :ok
    else
      render json: {}, status: :internal_server_error
    end
  end

  def destroy
    @task = Task.find(params[:id])
    if @task.destroy
      render json: {}, status: :ok
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
