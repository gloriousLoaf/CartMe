/* USER LIST VIEW - ADMIN */
import React, { useState, useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers, deleteUser } from '../actions/userActions';

const UserListView = ({ history }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    // send non-admins & unauth'd users to login
    userInfo && userInfo.isAdmin
      ? dispatch(listUsers())
      : history.push('/login');
  }, [dispatch, userInfo, history, successDelete]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
    handleClose();
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fa fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    disabled={userInfo._id === user._id}
                    onClick={handleShow}
                  >
                    <i
                      className='fas fa-trash'
                      style={{ padding: '3px 2px' }}
                    ></i>
                  </Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop='static'
                    keyboard={false}
                    centered
                    size='sm'
                  >
                    <Modal.Title className='d-flex p-3 mx-auto text-center'>
                      Delete this user?
                    </Modal.Title>
                    <Modal.Body className='d-flex p-2 mx-auto'>
                      <Button
                        variant='danger'
                        className='mx-2'
                        onClick={() => deleteHandler(user._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant='primary'
                        className='mx-2'
                        onClick={handleClose}
                      >
                        Cancel
                      </Button>
                    </Modal.Body>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListView;
