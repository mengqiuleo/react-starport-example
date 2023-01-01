/*
 * @Author: Pan Jingyi
 * @Date: 2023-01-02 03:03:52
 * @LastEditTime: 2023-01-02 03:43:06
 */
/// <reference types="vite/client" />
declare module 'pjy-starport';

import { AttributifyAttributes } from 'windicss/types/jsx'
declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}



