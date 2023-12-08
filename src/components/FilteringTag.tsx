import { useAppDispatch } from '../hooks/hooks';
import { deleteFilter } from '../redux/slices/filterSlice';
import { Tag } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

interface FilteringTagProps {
  tag: string;
}
function FilteringTag({ tag }: FilteringTagProps) {
  const dispatch = useAppDispatch();

  return (
    <Tag
      className="searched-tag"
      color="blue"
      icon={
        <CloseCircleOutlined
          onClick={() => {
            dispatch(deleteFilter(tag));
          }}
        />
      }
    >
      {tag}
    </Tag>
  );
}

export default FilteringTag;
