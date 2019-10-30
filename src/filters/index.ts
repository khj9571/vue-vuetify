
import Vue from 'vue'
import moment from "moment";

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousand(num: any) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(value: any) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

// export function removeSpecialChar(value:any) 

export const removeSpecialChar = (value: any) => {
  return value.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, "")
}

/**
 * 날짜 변환
 * @param value 날짜 
 * @param format 변환 형식
 */
export const toDate = (value: any, format: string = 'YYYY-MM-DD') => {

  if (typeof value === 'string' || (typeof value === 'object' && value instanceof Date)) {
    return moment(value).format(format);
  }
  return '';
}

/**
 * 말줄임
 * @param value 값 
 * @param cutIdx 줄일 사이즈
 */
export const abbreviation = (value: string, cutIdx: number) => {
  if (!value) return ''
  return value.slice(0, cutIdx) + '...';
}

/**
 * 금액 억 단위 환산
 * @param value 억단위로 환산할 금액
 * @param round 반올림
 */
export const oneHunderdthound = (value: any,round:number = 2) => {

  if (value == undefined || value == '') return '';
  const baseCurrency = 100000000;
  const minCurrency = 5000000;
  // var fix = (value:any) => {
  //   if (Math.abs(parseInt(value)) >= baseCurrency) {
  //     return 1;
  //   }
  // }
  return (parseInt(value) / baseCurrency).toFixed(round);
}