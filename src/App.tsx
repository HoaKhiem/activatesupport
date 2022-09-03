import React, { useState , useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {Collapse, Row, Col, Input, Select, notification} from 'antd';
import {SPA, checkRemove, CID} from './Data/data';
import {spa, checkRemove as c, cid} from './Types';
import type { NotificationPlacement } from 'antd/es/notification';
const openNotification = (placement: NotificationPlacement) => {
  notification.info({
    message: `Script copied`,
    description:
      'Copied to clipbroad',
    placement,
  });
};
const {Panel} = Collapse;
function App() {
  const [key, setKey] = useState<string>('');
  const [isValidKey, setIsValidKey] = useState<boolean>(false);
  const [spaCode, setSpaCode] = useState<string>('');
  const [checkRemoveCode, setCheckRemoveCode] = useState<string>('');
  const [cidCode, setCidCode] = useState<string>('');
  const [cid, setCid] = useState<any>('');
  const checkValidKey = (key:string) => {
    if(!key) return false
    let count = 0;
    key.split('-').forEach((k:string) => {
      if(k.length !== 5) return false
      count++
    })
    return count === 5
    //6PRHN-J3D9D-VT7GQ-GJ798-J8JM9
  }
  useEffect(() => {
    setIsValidKey(checkValidKey(key));
  }, [key]);
  const spaChangeHandler = (e:any) => {
    if(e !== -1){
      setSpaCode(SPA[e].getCode(key));
      navigator.clipboard.writeText(SPA[e].getCode(key));
      openNotification('bottomLeft');
    }else{
      setSpaCode('');
    }
  }
  const checkRemoveChange = (e:any) => {
    if(e !== -1){
      setCheckRemoveCode(checkRemove[e].code);
      navigator.clipboard.writeText(checkRemove[e].code);
      openNotification('bottomLeft');
    }else{
      setCheckRemoveCode('');
    }
  }
  const selectCidHandler =(e:any) => {
    if(cid.trim().length > 0){
      setCidCode(CID[e].getCode(cid));
      navigator.clipboard.writeText(CID[e].getCode(cid));
      openNotification('bottomLeft');
    }else{
      setCidCode('')
    }
  }
  return <React.Fragment>
    <Header/>
    <main>
      <div className="main-container">
        <Row>
          <Col>
            <p><b>1</b>. Mở <b>Command Prompt</b> với quyền <b>Adminnnnn</b></p>
          </Col>
        </Row>
        <Collapse  defaultActiveKey={['1']} accordion>
          <Panel className='bg-blue-300' showArrow={false} header="Script Activate Windows/Office" key="1">
            <Row>
              <Col xs={24} md={12} className='md:pr-2'>
                <div className='flex justify-between'>
                  <span>Nhập key:</span>
                  <a href="https://kol.com.vn/phanmemmaytinh">Mua key</a>
                </div>
                <Input onChange={(e: React.FormEvent<HTMLInputElement>) => setKey(e.currentTarget.value)} size='large' placeholder='Key'/>
              </Col>
              <Col xs={24} md={12} className='md:pl-2'>
                <div>
                  <span>Chọn code:</span>
                </div>
                <Select disabled ={!isValidKey} className='w-full' defaultValue='Windows/Office' size='large' onChange={(e:any) => spaChangeHandler(e)}>
                <Select.Option value={-1}>
                  Windows/Office
                </Select.Option>
                  {SPA.map((sp:spa) => {
                      return <Select.Option value={sp.id} key={sp.id}>
                        {sp.name}
                      </Select.Option>
                    })
                  }
                </Select>
              </Col>
            </Row>
            <Row>
              <Col className='mt-2'>
                <p><b>2.</b> <b>Chọn code</b> bên dưới và paste vào <b>Command Prompt</b> vừa mở:</p>
              </Col>
            </Row>
            <Row>
              <Col span={24} className='pb-4 mr-5'>
                <Input.TextArea rows={10} className='w-full mr-4 text-left' value={spaCode}></Input.TextArea>
              </Col>
            </Row>
          </Panel>
          <Panel className='bg-blue-300' showArrow={false} header="Get CID Key" key="2">
            <Row>
              <Col>
                  <p><b>3.</b>Kích hoạt:</p>
              </Col>
            </Row>
            <Row>
              <Col span={12} className='border-l-2 border-t-2 pl-5'>
                <p className='mt-2 font-bold'>Truy cập link để get CID</p>
              </Col>
              <Col span={12} className='border-r-2 border-l-2 border-t-2 pl-5'>
                <a target='blank' href='https://t.me/msdn_bot' className='block mt-2 underline font-semibold'>https://t.me/msdn_bot</a>
              </Col>
            </Row>
            <Row>
              <Col span={12} className='border-l-2 border-t-2 pl-5'>
                <p className='mt-2 font-bold'>Chưa có Telegram thì vào đây <i className="fas fa-chevron-right"></i></p>
              </Col>
              <Col span={12} className='border-r-2 border-l-2 border-t-2 pl-5'>
                <a target='blank' href='https://t.ly/Telegram_' className='block mt-2 underline font-semibold'>https://t.ly/Telegram_</a>
              </Col>
            </Row>
            <Row>
              <Col span={12} className='border-l-2 border-t-2 border-b-2 pl-5'>
                <p className='mt-2 font-bold'>Cài Tiếng Việt cho Telegram vào đây <i className="fas fa-chevron-right"></i></p>
              </Col>
              <Col span={12} className='border-r-2 border-l-2 border-t-2 border-b-2 pl-5'>
                <a target='blank' href='https://t.ly/telegram_tviet' className='block mt-2 underline font-semibold'>https://t.ly/telegram_tviet</a>
              </Col>
            </Row>

            <Row className='mt-7'>
              <Col md={12} xs={24} className='md:pr-2'>
                <Input size='large' onChange={(e: React.FormEvent<HTMLInputElement>) => setCid(e.currentTarget.value)}  placeholder='Nhập CID đã lấy vào đây' className='w-full'/>
              </Col>
              <Col md={12} xs={24} className='md:pl-2 xs:mt-2 md:mt-0'>
                  <Select onChange={(e:any) =>selectCidHandler(e)} className='w-full' defaultActiveFirstOption size='large'>
                    {
                      CID.map((c:cid) => {
                        return <Select.Option key={c.id} value={c.id}>
                          {c.name}
                        </Select.Option>
                      })
                    }
                  </Select>
              </Col>
            </Row>
            <Row>
            <Col span={24} className='pt-4 pb-4 mr-5'>
              <Input.TextArea rows={10} className='w-full mr-4 text-left' value={cidCode}></Input.TextArea>
            </Col>
            </Row>
          </Panel>
          <Panel className='bg-blue-300' showArrow={false} header="Kiểm tra và xóa key" key="3">
            <Row>
              <Col span={24} className='flex'>
                  <Select className='w-full' defaultValue='Windows/Office' size='large' onChange={(e:any) =>checkRemoveChange(e)}>
                    <Select.Option value={-1}>Check/Remove</Select.Option>
                    {
                      checkRemove.map((ck:c) => {
                        return <Select.Option key={ck.id}>
                          {ck.name}
                        </Select.Option>
                      })
                    }
                  </Select>
                </Col>
            </Row>
            <Row>
              <Col span={24} className='pt-4 pb-4 mr-5'>
                <Input.TextArea rows={10} className='w-full mr-4 text-left' value={checkRemoveCode}></Input.TextArea>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </div>
    </main>
  </React.Fragment>
}

export default App;
