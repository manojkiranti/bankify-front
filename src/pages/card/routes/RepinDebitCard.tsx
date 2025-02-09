import { useApproveRequestMutation, useFetchServiceListQuery } from "@/store/apis/coreApi";
import { displayError, displaySuccess } from "@/utils/displayMessageUtils";
import { Alert, Button, Spin, Table } from "antd";
import { ColumnsType } from 'antd/es/table';

interface ServiceRequest {
  id: number; // Assuming each result has a unique 'id'
  account_number: string;
  status: string;
  created_at: string;
  // Add other fields based on your actual data structure
}



const RepinDebitCard: React.FC = () => {
  
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
      dataIndex:"account_name",
      key: 'account_name'
    },
    {
      title: 'Email',
      dataIndex: "email",
      key: 'email'
    },
    {
      title: 'Mobile Number',
      dataIndex:"phone",
      key: 'phone'
    },
    {
      title: 'Request channel',
      dataIndex: ["request_body","channel"],
      key: 'channel'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      filters: [
        { text: 'Initiated', value: 'INITIATED' },
        { text: 'Submitted', value: 'SUBMITTED' },
        { text: 'Completed', value: 'COMPLETED' },
      ],
  
    },
    
    {
      title: 'Requested At',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (value) => {
        if( value.status === 'SUBMITTED') {
          return <Button type="primary" onClick={() => handleServiceApprove(value.id)} disabled={approveRequestLoading} loading={approveRequestLoading}>Approve</Button>
        } else {
          return <a>View</a>
        }
        
      },
    },
    // Add more columns as needed
  ];

  const { data: serviceResponse, isLoading, isError, error, refetch } = useFetchServiceListQuery({
    // service_name: "MOBILE_BANKING",
    request_type: "DEBIT_CARD_REPIN",
  });
  const [approveRequest, {isLoading: approveRequestLoading }] = useApproveRequestMutation();

  // Extract the results array or set it to an empty array if data is undefined
  const tableData: ServiceRequest[] = serviceResponse?.data?.data || [];

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
  const handleServiceApprove = (id:number) => {

    approveRequest({id}).unwrap()
    .then((res) => {
      displaySuccess(res.message)
      refetch();
    }).catch((err) => {
      displayError(err.message)
    });
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
          total: serviceResponse?.data.total, // Total number of records
          showSizeChanger: false, // Hide page size changer if not needed
        }}
        // Optional: Add more table props like onChange for sorting/filtering
      />
    </div>
  );
};

export default RepinDebitCard;