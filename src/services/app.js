import { stringify } from 'qs';
import request from '@/utils/request';

/**
 * 获取验证码并且获取公钥
 * @param {手机号码} mobile
 */
export async function getRegisterCaptcha(mobile) {
  return request(`/api/captcha/sms/${mobile}`, {
    headers: {
      Authorization: 'Basic c2FuZ29lczpzYW5nb2Vz',
    },
  });
}
/**
 * 根据随机数获取公钥
 * @param {随机数} random
 */
export async function getPublicKeyByRandom(random) {
  return request(`/api/encrypt/rsa/${random}`, {
    headers: {
      Authorization: 'Basic c2FuZ29lczpzYW5nb2Vz',
    },
  });
}

/**
 * 获取随机验证码 返回验证码图片
 * @param {随机数} random
 */
export async function getImageCaptcha(random) {
  return request(`/api/captcha/image/${random}`, {
    headers: {
      Authorization: 'Basic c2FuZ29lczpzYW5nb2Vz',
    },
  });
}
