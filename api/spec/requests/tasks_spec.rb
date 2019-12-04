require 'rails_helper'

RSpec.describe "TasksAPI", type: :request do
  # index
  describe 'GET Tasks' do
    it 'response 200' do
      FactoryBot.create_list(:task, 10)
      get '/tasks'
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json.length).to eq(10)
    end
  end

  # show
  describe 'GET a Task' do
    it 'response 200' do
      task = create(:task, title: 'test-title')
      get "/tasks/#{task.id}"
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json["title"]).to eq(task.title)
    end
  end

  # create
  describe 'POST' do
    context 'with valid params' do
      it 'response 200' do
        valid_params = { title: 'valid-title', detail: 'valid-detail'}
        expect { post '/tasks', params: { task: valid_params } }.to change(Task, :count).by(+1)
        expect(response).to have_http_status(:success)
      end

      it 'response created data' do
        valid_params = { title: 'valid-title', detail: 'valid-detail'}
        post '/tasks', params: { task: valid_params }
        data = JSON.parse(response.body)
        expect(data['title']).to eq('valid-title')
      end
    end
    context 'with invalid params' do
      it 'response 500' do
        invalid_params = { title: '', detail: 'valid-detail'}
        expect { post '/tasks', params: { task: invalid_params } }.to change(Task, :count).by(0)
        expect(response).to have_http_status(:internal_server_error)
      end

      it 'response blank object ' do
        invalid_params = { title: '', detail: 'valid-detail'}
        post '/tasks', params: { task: invalid_params }
        data = JSON.parse(response.body)
        expect(data).to eq({})
      end
    end
  end

  describe 'PATCH' do
    context 'with valid params' do
      before do
        @task = create(:task)
        @valid_params = {title: 'valid-title', detail: 'valid-detail'}
      end
      it 'response 200' do
        patch "/tasks/#{@task.id}", params: { task: @valid_params }
        expect(response).to have_http_status(:success)
      end
      it 'response updated data' do
        patch "/tasks/#{@task.id}", params: { task: @valid_params }
        data = JSON.parse(response.body)
        expect(data['title']).to eq('valid-title')
        expect(data['detail']).to eq('valid-detail')
      end
    end
    context 'with invalid params' do
      before do
        @task = create(:task)
        @invalid_params = {title: '', detail: 'valid-detail'}
      end
      it 'response 500' do
        patch "/tasks/#{@task.id}", params: { task: @invalid_params }
        expect(response).to have_http_status(:internal_server_error)
      end
      it 'response blank object' do
        patch "/tasks/#{@task.id}", params: { task: @invalid_params }
        data = JSON.parse(response.body)
        expect(data).to eq({})
      end
    end
  end
end