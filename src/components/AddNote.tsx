import { useAppDispatch } from '../hooks/hooks';
import { addNote } from '../redux/slices/notesSlice';
import { v4 as uuidv4 } from 'uuid';
import { Tooltip, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons/lib/icons';

export default function AddNote() {
  const dispatch = useAppDispatch();
  return (
    <div style={{ margin: '40px' }}>
      <Tooltip title="add new note">
        <Button
          type="default"
          icon={<PlusOutlined />}
          onClick={() => {
            dispatch(addNote({ id: uuidv4(), note: '', tags: [''] }));
          }}
        >
          Add new note
        </Button>
      </Tooltip>
    </div>
  );
}
