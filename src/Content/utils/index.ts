/**
 * Created by Lester on 2021/1/30
 */

export const copy = (text: string) => {
  const ele = document.createElement('input');
  ele.value = text;
  document.body.appendChild(ele);
  ele.select();
  document.execCommand('copy');
  document.body.removeChild(ele);
};