import { customBaseQuery } from '@/lib/baseQuery';
import { ApiResponse, CustomerRequestPayload } from '@/types';
import { mapObjectKeysToSnakeCase } from '@/utils/mapper';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ServiceListResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: any
}
export const coreAPI = createApi({
  reducerPath: 'coreAPI',
 baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    fetchCountryByIP: builder.query<
      { data: { country: string; ip: string } },
      void
    >({
      query: () => '/api/core/user-country/',
    }),
    fetchLenders: builder.query<any, void>({
      query: () => '/api/core/lenders/',
    }),
    fetchImageURL: builder.query<any, { image_url: string }>({
      query: ({ image_url }) => {
        console.log('image_url', image_url);
        return `/api/core/get_image?image_url=${encodeURIComponent(image_url)}`;
      },
    }),
    customerServiceRequest: builder.mutation<ApiResponse<{pending_request_id: string}>, CustomerRequestPayload<any>>({
      query: (body) => {
        const transformedData = mapObjectKeysToSnakeCase(body.data);
        const payload = {
          action: body.action,
          data: transformedData,
        }
        return{
          url: 'api/service/initiate/',
          method: 'POST',
          body: payload
        }
      },
    }),
    serviceOtpVerify: builder.mutation<ApiResponse<{id: string, message: string}>, {pending_request_id:string, otp_code:string}>({
      query: (body) => {
        return{
          url: 'api/service/verify-otp/',
          method: 'POST',
          body: body
        }
      },
    }),
    fetchServiceList: builder.query<any, { service_name?: string; request_type?: string; page?: number; page_size?: number }>({
      query: ({ service_name, request_type, page, page_size }) => {
        // Construct the query parameters dynamically based on provided arguments
        const params: Record<string, any> = {};
    
        if (service_name) {
          params.service_name = service_name;
        }
        if (request_type) {
          params.request_type = request_type;
        }
        if (page) {
          params.page = page;
        }
        if (page_size) {
          params.page_size = page_size;
        }
    
        return {
          url: '/api/admin/all-service-request',
          params,
        };
      },
    }),
    approveRequest: builder.mutation<ApiResponse<{id: string, message: string}>, {id:number,}>({
      query: (body) => {
        return{
          url: `api/admin/request/approve/${body.id}`,
          method: 'POST',
          body: body
        }
      },
    }),
  }),
});

export const {
  useFetchCountryByIPQuery,
  useFetchLendersQuery,
  useFetchImageURLQuery,
  useCustomerServiceRequestMutation,
  useServiceOtpVerifyMutation,
  useFetchServiceListQuery,
  useApproveRequestMutation
} = coreAPI;
