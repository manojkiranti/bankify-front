import { useFetchServiceListQuery } from "@/store/apis/coreApi";
import { Alert, Spin, Table } from "antd";
import { ColumnsType } from 'antd/es/table';

interface ServiceRequest {
  id: number; // Assuming each result has a unique 'id'
  account_number: string;
  status: string;
  created_at: string;
  // Add other fields based on your actual data structure
}

// 2. Define the columns for the Ant Design Table
const columns: ColumnsType<ServiceRequest> = [
  // {
  //   title: 'ID',
  //   dataIndex: 'id',
  //   key: 'id',

  // },
  {
    title: 'Account Number',
    dataIndex: 'account_number',
    key: 'account_number'
  },
  {
    title: 'Account Name',
    dataIndex:["data","account_name"],
    key: 'account_name'
  },
  {
    title: 'Email',
    dataIndex: ["data","email"],
    key: 'email'
  },
  {
    title: 'Mobile Number',
    dataIndex: ["data","mobile_number"],
    key: 'mobile_number'
  },
  {
    title: 'Branch',
    dataIndex: ["data","branch"],
    key: 'mobile_number'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    filters: [
      { text: 'Active', value: 'active' },
      { text: 'Inactive', value: 'inactive' },
      // Add more filters as needed
    ],

  },
  {
    title: 'Requested At',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (date: string) => new Date(date).toLocaleDateString(),
  },
  // Add more columns as needed
];
const NewDebitCard: React.FC = () => {
  // 3. Fetch data using RTK Query
  const { data, isLoading, isError, error } = useFetchServiceListQuery({
    service_name: "card",
    action_name: "debit_card_register",
  });

  // Extract the results array or set it to an empty array if data is undefined
  const tableData: ServiceRequest[] = data?.results || [];

  // Handle loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <Spin size="large" />
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <Alert
        message="Error"
        description={error?.toString() || "An error occurred while fetching data."}
        type="error"
        showIcon
      />
    );
  }

  return (
    <div>
      {/* <Typography.Title level={4}>New Mobank Registration</Typography.Title> */}
      <Table
        columns={columns}
        dataSource={tableData}
        rowKey="id" // Ensure each row has a unique key
        bordered
        pagination={{
          pageSize: 10, // Adjust page size as needed
          total: data?.count, // Total number of records
          showSizeChanger: false, // Hide page size changer if not needed
        }}
        // Optional: Add more table props like onChange for sorting/filtering
      />
    </div>
  );
};

export default NewDebitCard;