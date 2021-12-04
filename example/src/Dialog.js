import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useSubscriber } from '../../lib';

import UserService from './services/user.service';

const Dialog = () => {

  console.log('rerender');

  const { isLoading } = useSubscriber('page');
  const userService = useRef(new UserService());
  const $btnClose = useRef(null);
  const { register, handleSubmit } = useForm();

  const doLogin = (user) => {
    userService.current.doLogin(user).then(() => {
      if ($btnClose) {
        $btnClose.current.click();
      }
    });
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <form className="form" onSubmit={handleSubmit(doLogin)}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Username:</label>
                  <input { ...register('name') } className="form-control" id="recipient-name" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" ref={$btnClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" disabled={!!isLoading}>
                {
                  isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                }
                &nbsp;Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Dialog };
