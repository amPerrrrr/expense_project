import React ,{ useState,useEffect} from "react";
import { Table, Tooltip } from "antd";
import {InfoCircleOutlined  } from '@ant-design/icons'
import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RenderAvatarOnly from "../../Components/RenderAvatarOnly";
import { getPathImage_TTA } from "../../Service/Ip";
import { getAllCategories } from "../../redux/actions";
import Pagination from "../../Components/Pagination";
import {Container } from "reactstrap"

export default function TableList() {
  const { GetAllCategories } = useSelector((state) => state);
  const history = useHistory()
  const dispatch = useDispatch();


  const [page_limit, setPage_limit] = useState({
    page: 1,
    limit: 0,
    page_Size: 10,
  });

  useEffect(() => {
    let payload = {
      page: 1,
      limit: 10,
    };
    dispatch(getAllCategories(payload));

    return () => {
      let payload = {
        clear: true
      };
      dispatch(getAllCategories(payload));
      setPage_limit({
        ...page_limit,
        page: 1,
        limit: 0,
        page_Size: 10,
      })
    };
  }, []);

  useEffect(() => {
    setPage_limit({
      ...page_limit,
      limit : GetAllCategories.totalCount
    })
  
    return () => {
      
    }
  }, [GetAllCategories])

    console.log(getPathImage_TTA());
  const columns = [
    {
      title: "Category",
      render: (data) => (
        <Tooltip title={data.name}>
          <div>
            <RenderAvatarOnly
              size={50}
              sizeIcon={25}
              useImageUrl={true}
              image={
                data.use_avatar ? null : getPathImage_TTA() + data.image_url
              }
              icon={data.avatar_icon}
              color={data.avatar_color}
            />
          </div>
        </Tooltip>
        
      ),
      width: 100,

    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Info",
      width: 80,
      render: (data) => (
        <InfoCircleOutlined 
          className="info-icon"
          style={{ fontSize: '16px', color: '#682a8f'}}
          alt="visit catagories"
          onClick={() => history.push("/admin-detail-category/"+data.id)}
        />

      ),
    },
  ];

  return (
    <Container>
    <div className="div-table-no-modal">
      <Table
        dataSource={GetAllCategories.categories}
        columns={columns}
        loading={GetAllCategories.loading}
        pagination={false}
        rowKey="id"
        scroll={{
          y: 500,
        }}
      />
      <Pagination current={1} total={30} />
    </div>
    </Container>
  );
}
