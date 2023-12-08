import { useAppDispatch } from '../hooks/hooks';
import { setFilter } from '../redux/slices/filterSlice';
import { Form, Input, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

export default function FilterForm() {
  const [searchingTag, setSerchingTag] = useState<string>('');
  const dispatch = useAppDispatch();

  return (
    <div>
      Tag Search
      <Form
        name="basic"
        // initialValues={{ remember: true }}
        onFinish={() => {
          dispatch(setFilter(searchingTag));
          setSerchingTag(''); //не работает
        }}
        className="form-container"
      >
        <Form.Item
          name="username"
          className="form-item"
          // rules={[
          //   { required: true, message: 'Введите теги в формате #....  ' },
          // ]}
        >
          <Input
            style={{ width: '250px' }}
            value={searchingTag} //не работает при setSerchingTag('')
            placeholder="type with #"
            onChange={(e) => {
              setSerchingTag(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item className="form-item">
          <Tooltip title="search">
            <Button
              shape="circle"
              icon={<SearchOutlined />}
              htmlType="submit"
            />
          </Tooltip>
        </Form.Item>
      </Form>
    </div>
  );
}
