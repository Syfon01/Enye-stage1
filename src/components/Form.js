  
import {
    Form,
    Input,
    Button,
  } from 'antd';

  import {useSelector , useDispatch} from 'react-redux';
import React from 'react';
import { formCreate } from '../redux/action';
import UserTable from './Table';

// import './styles.css';
  
  const RegistrationForm = (props) => {
    const {
      formData
    } = useSelector(state => ({
      ...state.formReducer
    }));

       const dispatch = useDispatch();

    const handleSubmit = e => {
      
      e.preventDefault();
      let users;
      props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if(formData.length !== 0){
            values.key = parseInt(formData.length) + 1;
            users = [ ...formData, values ]
          } else {
            values.key = 1;
            users = [ ...formData, values ]
          }
          dispatch(formCreate(users)) 
        }
      });
    };

      const { getFieldDecorator } = props.form;
  
      const formItemLayout = {
        
      };
      const tailFormItemLayout = {
        
      };
  
      return (
        <div className="container bg-light py-5">
          <div  className="col-md-6 mx-auto border py-5">
            <h2 className="register-title">Registration</h2>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col">
              <Form.Item label="First Name">
                {getFieldDecorator('firstname', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid name',
                    },
                    {
                      required: true,
                      message: 'Please input your First Name!',
                    },
                  ],
                })(<Input className="form-control"
                />)}
              </Form.Item>
              </div>
              <div className="col">
              <Form.Item label="Last Name">
                {getFieldDecorator('lastname', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid name',
                    },
                    {
                      required: true,
                      message: 'Please input your Last Name!',
                    },
                  ],
                })(<Input  className="form-control"
                />)}
                
              </Form.Item>
              </div>
                </div>

                <div className="form-row">
              <div className="col">
              <Form.Item label="Birthday">
                {getFieldDecorator('birthday', {
                  rules: [
                    {
                      
                      message: 'The input is not valid date',
                    },
                    {
                      required: true,
                      message: 'Please input your Birthday!',
                    },
                  ],
                })(<Input
                type="date" className="form-control"
                />)}
            </Form.Item>
            </div>
            <div className="col">
              <Form.Item label="Age">
                {getFieldDecorator('age', {
                  rules: [
                    {
                      
                      message: 'The input is not valid Age',
                    },
                    {
                      required: true,
                      message: 'Please input your Age!',
                    },
                  ],
                })(<Input type="Number"  className="form-control"/>)}
              </Form.Item>
              </div>
             </div> 

              <Form.Item label="Hobby">
                {getFieldDecorator('hobby', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid text',
                    },
                    {
                      required: true,
                      message: 'Please input your Hobby!',
                    },
                  ],
                })(<Input className="form-control"/>)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
              <div className="">
                <Button type="primary" className="btn btn-success form-control mt-3" htmlType="submit">
                  Register
                </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
          <UserTable data={formData} />
        </div>
      );
  }

  const UserForm = Form.create({ name: 'register' })(RegistrationForm);

export default UserForm;