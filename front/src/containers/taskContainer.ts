import { AppState } from '../store/store';
import { TaskActions } from '../store/task/actions';

import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import axios, { CancelTokenSource } from 'axios';
import _ from 'lodash';
import { DEV_ROOT_URL } from '../environment'

export const useTask = () => {
  console.log('useTask')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [cancelToken] = useState(axios.CancelToken.source())
  const tasks = useSelector( (state: AppState) => state.tasks)
  const dispatch = useDispatch()

  const getTasks = useCallback(async () => {
    console.log('get')
    setLoading(true)
    try {
      const response = await axios.get(`${DEV_ROOT_URL}/tasks`, {cancelToken: cancelToken.token})
      const tasks = _.mapKeys(response.data, 'id')
      setLoading(false)
      dispatch(TaskActions.readTasks(tasks))
    } catch (e) {
      setLoading(false)
      setError(e.message)
    }
  }, [loading, error, tasks])

  const postTask = useCallback(async (newTask) => {
    try {
      const response = await axios.post(`${DEV_ROOT_URL}/tasks`, {task: newTask})
      const task = {[response.data.id]: response.data}
      dispatch(TaskActions.postTask(task))
    } catch (e) {
      setError(e.message)
    }
  },[error, tasks])

  return {
    tasks,
    getTasks,
    postTask,
    loading,
    error,
    cancelToken
  }
}
