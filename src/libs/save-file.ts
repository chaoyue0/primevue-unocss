export function saveFile(blob: Blob, name: string): void {
  const navigator = window.navigator as any;
  if (navigator.msSaveOrOpenBlob) {
    // Internet Explorer 和 Microsoft Edge 浏览器特有的属性
    navigator.msSaveOrOpenBlob(blob, name);
    return;
  }
  // 兼容其他现代浏览器
  const tempLink = document.createElement('a');
  /**
   * @URL.createObjectURL()
   * 将 Blob 或 File 对象转换为可用于预览图像、下载文件等用途的 URL
   * 避免了将文件上传到服务器，直接在客户端访问文件
   * 创建的 URL 是临时的，只存在于当前浏览器会话中，浏览器关闭URL就会被释放，也调用URL.revokeObjectURL()可以进行手动释放
   */
  const blobUrl = URL.createObjectURL(blob);
  try {
    tempLink.href = blobUrl;
    tempLink.setAttribute('download', name);
    tempLink.setAttribute('target', '_blank');
    document.body.appendChild(tempLink);
    let event;
    try {
      event = new MouseEvent('click');
    } catch (e) {
      //处理不支持MouseEvent的构造函数，创建一个兼容性更好的鼠标事件
      event = document.createEvent('MouseEvent');
    }
    tempLink.dispatchEvent(event);
  } finally {
    setTimeout(function () {
      document.body.removeChild(tempLink);
      (window.URL || window.webkitURL || window).revokeObjectURL(blobUrl);
    }, 1000 * 10);
  }
}
