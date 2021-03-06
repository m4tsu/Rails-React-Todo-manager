import { AppState } from '../store/store';
import { TaskActions } from '../store/task/actions';
import { TaskProps } from '../store/task/reducer';

import { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import axios, { CancelTokenSource } from 'axios';
import _ from 'lodash';
import { DEV_ROOT_URL } from '../environment'
import { async } from 'q';
import { Task } from 'react-native';

export const useTask = () => {
  console.log('useTask')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [cancelToken] = useState(axios.CancelToken.source())
  const tasks = useSelector( (state: AppState) => state.tasks)
  const dispatch = useDispatch()

  const getTasks = useCallback(async () => {
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
      if (response.status === 200) {
        dispatch(TaskActions.postTask(task))
      }
    } catch (e) {
      setError(e.message)
    }
  },[error])

  const updateTask = useCallback(async (task) => {
    try{
      // const patchParams = {title: task.title, detail: task.detail, status: task.satatus}
      const response = await axios.patch(`${DEV_ROOT_URL}/tasks/${task.id}`, {task: task})
      const responseTask = {[response.data.id]: response.data}
      if (response.status === 200) {
        dispatch(TaskActions.updateTask(responseTask))
      }
    } catch (e) {
      setError(e.message)
    }
  },[error])

  const deleteTask = useCallback(async (task_id: number) => {
    try {
      const response = await axios.delete(`${DEV_ROOT_URL}/tasks/${task_id}`)
      console.log(response)
      if (response.status === 200) {
        dispatch(TaskActions.deleteTask(task_id))
      }
    } catch (e) {
      setError(e.message)
    }
  },[error])

  const updateTaskStatus = useCallback(async (task: TaskProps, newStatus: string) => {
    try {
      const response = await axios.patch(`${DEV_ROOT_URL}/tasks/${task.id}`, {task: {...task, status: newStatus}})
      const responseTask = {[response.data.id]: response.data}
      if (response.status === 200) {
        dispatch(TaskActions.updateTask(responseTask))
      }
    } catch (e) {
      setError(e.message)
    }
  },[])

  return {
    tasks,
    getTasks,
    postTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    loading,
    error,
    cancelToken
  }
}
