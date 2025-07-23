'use client'
import { useState, useEffect } from "react"
import { api } from "../api/api"
import { Todo } from "../utils/interface"

export function useTodos(query?: string){
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function fetchTodos(){
    try {
      setLoading(true)

      let url ='/Todo?sortBy=created%20desc'
      if(query) {
        url+= `&where=${encodeURIComponent(`title LIKE '%${query}`)}`
      }

      const response = await api.get<Todo[]>(url)
      setTodos(response.data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function createTodo(Title: string) {
    try {
      const response = await api.post ('/Todo', { Title:Title, completed: false})
      setTodos((prev) => [...prev, response.data])
    } catch (error) {
      console.log (error)
    }
  }

  async function updateTodo(id: string, data: Partial<Todo>) {
    try {
        const response = await api.put(`/Todo/${id}`, data)  //Body request untuk Put atau Edit Todo
        setTodos((prev)=> prev.map((todo)=> (todo.objectId === id ? response.data : todo)))
    } catch (error) {
      console.log (error)
      
    }
  }

  async function deleteTodo(id: string) {
    try {
      await api.delete(`/Todo/${id}`)
      setTodos((prev) => prev.filter((todo)=> todo.objectId !== id))
    } catch (error) {
      console.log (error)
    }
  }

  useEffect(()=> {
    fetchTodos()
  }, [])


  useEffect(()=> {
    fetchTodos()
  },[])

  return {
    todos,
    loading,
    createTodo,
    updateTodo,
    deleteTodo
  }
}