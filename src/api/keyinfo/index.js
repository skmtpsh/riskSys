import request from '@/utils/request'
const keyApi = {
  BASE ({
    appId = 'bailian123456789',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = '8baee007462b48dd317f890dfd179894',
    isForce = false
  }) {
    return request({
      url: '/risk/keyinfo/personinfo.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce
      }
    })
  },
  OP ({
    appId = 'bailian123456789',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = '8baee007462b48dd317f890dfd179894',
    isForce = false
  }) {
    return request({
      url: '/risk/keyinfo/operator.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce
      }
    })
  },
  RISK ({
    appId = 'bailian123456789',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = '8baee007462b48dd317f890dfd179894',
    isForce = false
  }) {
    return request({
      url: '/risk/keyinfo/blacklist.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce
      }
    })
  },
  RULE ({
    appId = 'bailian123456789',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = '8baee007462b48dd317f890dfd179894',
    isForce = false
  }) {
    return request({
      url: '/risk/keyinfo/machine.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        isForce
      }
    })
  },
  RIGHTMENU ({
    appId = 'bailian123456789',
    timestamp = '20180820100818',
    name = '袁丽',
    mobile = '15066111824',
    idCard = '370305199201031528',
    signSystem = '8baee007462b48dd317f890dfd179894',
    staffCode = ''
  }) {
    return request({
      url: '/risk/right/menus.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        staffCode
      }
    })
  }
}
export default keyApi
