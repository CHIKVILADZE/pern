import React from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">My Todo</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-100vw  border border-danger p-3"
      >
        <div className="mb-3">
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
        <div className="mb-3">
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
        <div className="mb-3">
          <select
            className={`form-select ${errors.status ? 'is-invalid' : ''}`}
            id="status"
            {...register('status', { required: 'Status is required' })}
          >
            <option value="">Select Status</option>
            <option value="Done">Done</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
          {errors.status && (
            <div className="invalid-feedback">{errors.status.message}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
