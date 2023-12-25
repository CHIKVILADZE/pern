import React, { useContext } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../App';

const TodoForm = ({ todos, setTodos }) => {
  const { theme, toogleTheme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData, event) => {
    try {
      const { title, description, status } = formData;
      const body = { title, description, status };

      const response = await axios.post('http://localhost:5000/todos', body, {
        headers: {
          'Content-Type': 'application/json',
          body: JSON.stringify(body),
        },
      });
      setTodos([response.data, ...todos]);
      event.target.reset(); // Resetting the form
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-3 rounded-3">
      <div className="d-flex justify-content-between w-100vw">
        <div className="d-flex flex-column gap-2 mb-3">
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
          <ReactSwitch onChange={toogleTheme} checked={theme === 'dark'} />
        </div>

        <h1 className="text-center">My Todo</h1>
        <div>Hello</div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="main w-100vw  border borde-secondary rounded-3 p-2  "
      >
        <div className="mb-3" style={{ height: '50px' }}>
          <input
            type="text"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            id="title"
            placeholder="Enter title"
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 3,
                message: 'Title should be at least 3 characters',
              },
            })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>
        <div className="mb-3" style={{ height: '90px' }}>
          <textarea
            className={`form-control no-resize ${
              errors.description ? 'is-invalid' : ''
            }`}
            id="description"
            placeholder="Enter description"
            {...register('description', {
              required: 'Description is required',
              maxLength: {
                value: 100,
                message: 'Description should be less than 100 characters',
              },
            })}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>
        <div className="mb-3" style={{ height: '50px' }}>
          <select
            className={`form-select ${errors.status ? 'is-invalid' : ''}`}
            id="status"
            defaultValue=""
            {...register('status', { required: 'Status is required' })}
          >
            <option value="" disabled hidden>
              Select Status
            </option>
            <option value="Done">Done</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
          {errors.status && (
            <div className="invalid-feedback">{errors.status.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
