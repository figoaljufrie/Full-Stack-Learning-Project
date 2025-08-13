'use client'

// ✅ Library pihak ketiga
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toFormikValidate, toFormikValidationSchema } from 'zod-formik-adapter'

// ✅ Validation
import { todoScheme } from '../utils/validation/todo.scheme'


 // asumsi kamu lupa tutup kurung

// ✅ Next.js Hooks
import { useRouter, useSearchParams } from 'next/navigation'

// ✅ React Hooks
import { useState, useMemo } from 'react'

// ✅ Custom Hooks
import { useTodos } from '../helpers/useTodos'

// ✅ Interface & Komponen lokal
import { Todo } from '../utils/interface'
import TodoItem from '../components/todoItem'

export default function TodoList() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q') || ''

  const [title, setTitle] = useState<string>("")
  const [editing, setEditing] = useState<Todo | null>(null)
  const [search, setSearch] = useState<string>(searchQuery)
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all')
  const [sorting, setSorting] = useState<'asc' | 'desc'>('desc')

  const { todos, loading, createTodo, updateTodo, deleteTodo } = useTodos(searchQuery)

  const filteredTodos = useMemo(() => {
    let data = [...todos]

    // ✅ Search filter
    if (searchQuery) {
      data = data.filter((item) =>
        item.Title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // ✅ Status filter
    if (filter === 'completed') {
      data = data.filter((item) => item.Completed)
    } else if (filter === 'pending') {
      data = data.filter((item) => !item.Completed)
    }

    // ✅ Sorting by created date
    data.sort((a, b) => {
      const aTime = new Date(a.created ?? 0).getTime()
      const bTime = new Date(b.created ?? 0).getTime()
      return sorting === 'asc' ? aTime - bTime : bTime - aTime
    })

    return data
  }, [todos, filter, searchQuery, sorting])

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    router.push(`/todo?q=${encodeURIComponent(search)}`)
  }

  function handleSubmit(e: React.FormEvent) {

  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Tidy Task</h1>

      <Formik
      initialValues={{ Title: editing?.Title || ''}}
      validationScheme={toFormikValidationSchema(todoScheme)}
      onSubmit={(values, { resetForm })=> {
        if (editing) {
          updateTodo(editing.objectId, { Title: values.Title})
       } else {
        createTodo(values.Title)
       }
       resetForm()
      }
      }
      >
        <Form className="flex gap-2 mb-4 items-start flex-col sm:flex-row">
          <div className="w-full">
            <Field
              name="Title"
              type="Text"
              placeholder="Enter Todo..."
              className="w-full p-2 border border-gray-300 roounded-md"/>
          </div>
          <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full sm:w-auto">
            {editing ? 'Update' : 'Add'}
          </button>
          
        </Form>
      </Formik>

      {/* Search */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search todos..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Search
        </button>
      </form>

      {/* Filter & Sort */}
      <div className="flex justify-between mb-4">
        <select
          value={filter}
          className="border p-2 rounded-md"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setFilter(e.target.value as 'all' | 'completed' | 'pending')
          }
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
        <button
          onClick={() =>
            setSorting((prev) => (prev === 'asc' ? 'desc' : 'asc'))
          }
          className="border px-4 py-2 rounded-md"
        >
          Sort by date: {sorting.toUpperCase()}
        </button>
      </div>

      {/* Todo Table */}
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-center">Completed</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center p-4">
                No todos found.
              </td>
            </tr>
          ) : (
            filteredTodos.map((todo: Todo) => (
              <TodoItem
                key={todo.objectId}
                todo={todo}
                onEdit={(edit) => {
                  setTitle(edit.Title)
                  setEditing(edit)
                }}
                onDelete={() => alert('Under Development')}
              />
            ))
          )}
        </tbody>
      </table>
    </main>
  )
}