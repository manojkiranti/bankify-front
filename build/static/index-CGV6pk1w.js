import{aG as c,$ as e,a0 as u,aI as d,ax as l,ay as a,aF as x}from"./index-BwZTT435.js";import{A as m}from"./index-BVDI3Zsl.js";import{F as g}from"./Table-BenRI2gC.js";const f=[{title:"Reference Number",dataIndex:["data","reference_number"],key:"reference_number"},{title:"Gurantee Amount",dataIndex:["data","gurantee_amount"],key:"gurantee_amount"},{title:"Status",dataIndex:"status",key:"status",filters:[{text:"Active",value:"active"},{text:"Inactive",value:"inactive"}]},{title:"Requested At",dataIndex:"created_at",key:"created_at",render:t=>new Date(t).toLocaleDateString()}],r=()=>{const{data:t,isLoading:n,isError:s,error:i}=c({service_name:"document_service"}),o=t?.results||[];return n?e.jsx("div",{style:{textAlign:"center",padding:"50px"},children:e.jsx(u,{size:"large"})}):s?e.jsx(m,{message:"Error",description:i?.toString()||"An error occurred while fetching data.",type:"error",showIcon:!0}):e.jsx("div",{children:e.jsx(g,{columns:f,dataSource:o,rowKey:"id",bordered:!0,pagination:{pageSize:10,total:t?.count,showSizeChanger:!1}})})},j=t=>{console.log(t)},p=[{key:"1",label:"Bank Gurantee Verification",children:e.jsx(r,{})}],h=()=>e.jsx(d,{defaultActiveKey:"1",items:p,onChange:j}),k=()=>e.jsxs(l,{children:[e.jsx(a,{path:"",element:e.jsx(h,{})}),e.jsx(a,{path:"bank-guarantee",element:e.jsx(r,{})}),e.jsx(a,{path:"*",element:e.jsx(x,{to:"."})})]});export{k as DocumentVerificationRoutes};
//# sourceMappingURL=index-CGV6pk1w.js.map
