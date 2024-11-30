import React from 'react';
import { Pagination } from 'antd';

interface PaginationProps {
  total: number;
  currentPage: number;
  pageSize: number;
  onChange: (page: number, pageSize?: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  total,
  currentPage,
  pageSize,
  onChange,
}) => {
  return (
    <div className='pagination-container'>
      <Pagination
        total={total}
        current={currentPage}
        pageSize={pageSize}
        showSizeChanger
        onChange={onChange}
        pageSizeOptions={['5', '10', '20']}
      />
    </div>
  );
};

export default PaginationComponent;
