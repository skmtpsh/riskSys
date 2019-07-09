import request from '@/utils/request'
const smsApi = {
  SMS  ({
    appId = 'yipurse123456789',
    timestamp = '20190117100801',
    name = '王侃',
    mobile = '15244233502',
    idCard = '370282199105125812',
    signSystem = '70d5dc3ff7995511bf4bdaa28f8d3547',
    smsLabelCodes = ''
  }) {
    return request({
      url: '/risk/blacklist/sms.cmd',
      method: 'get',
      params: {
        appId,
        timestamp,
        name,
        mobile,
        idCard,
        signSystem,
        smsLabelCodes
      }
    })
  },
  SMSLABEL  ({
    appId = 'yipurse123456789',
    timestamp = '20190117100801',
    signSystem = '70d5dc3ff7995511bf4bdaa28f8d3547',
    labelType = '1'
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
export default smsApi
