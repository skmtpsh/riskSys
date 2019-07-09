import request from '@/utils/request'
const baseApi = {
  BASEINFO  ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '王侃',
    mobile = '15268416427',
    idCard = '330205199601293313',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c'
  }) {
    return request({
      url: '/risk/blacklist/personinfo.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem
      }
    })
  },
  ZHIMAINFO  ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '王侃',
    mobile = '15268416427',
    idCard = '330205199601293313',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c'
  }) {
    return request({
      url: '/risk/blacklist/gxb/zhima.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem
      }
    })
  },
  // 通讯录信息
  CONTACTS ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '姜昕冯',
    mobile = '13723408505',
    idCard = '420111199105315513',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    contactsLabelCode = '',
    contactsName = '',
    contactsMobile = ''
  }) {
    return request({
      url: '/risk/blacklist/contacts.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        contactsLabelCode,
        contactsName,
        contactsMobile
      }
    })
  },
  OPERATOR ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '孙银龙',
    mobile = '18766216259',
    idCard = '230231199009281531',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    isSelectSameMobile = false, // 同一号段
    isMatchContacts = false // 通讯录匹配
  }) {
    return request({
      url: '/risk/blacklist/operator.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isSelectSameMobile,
        isMatchContacts
      }
    })
  },
  SOCIAL ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c'
  }) {
    return request({
      url: '/risk/blacklist/socialsecurity.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem
      }
    })
  },
  SCHOOL ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c'
  }) {
    return request({
      url: '/risk/blacklist/xuexin.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem
      }
    })
  },
  ORDER ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c'
  }) {
    return request({
      url: '/risk/internal/borrow.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem
      }
    })
  },
  ADDRESSLABELLIST ({
    appId = 'fangchunxiao1234',
    timestamp = '20180820100818',
    signSystem = 'f26edddcb501dff1ba4f8d3df285d17c',
    labelType = '2'
  }) {
    return request({
      url: '/risk/blacklist/labellist.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        signSystem,
        labelType
      }
    })
  }
}
export default baseApi
