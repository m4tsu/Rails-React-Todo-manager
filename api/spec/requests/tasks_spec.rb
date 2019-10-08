require 'rails_helper'

RSpec.describe "TasksAPI", type: :request do
  it 'loads a task' do
    task = create(:task)
    expect(task.title).to eq 'test_title1'

    # index
    get tasks_path
    expect(response).to have_http_status(:success)
    json = JSON.parse(response.body)
    expect(json.length).to eq(1)
    task_id = json[0]["id"]

    # show
    get task_path(task_id)
    expect(response).to have_http_status(:success)
    json = JSON.parse(response.body)
    expect(json["title"]).to eq("test_title1")

  end
end