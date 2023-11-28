const baseDownload = (url: string, fileName: string) => {
  const isSupport = 'download' in document.createElement('a');
  if (isSupport) {
    const currentUrl = window.location.protocol + '//' + window.location.host;
    const resourceUrl = url.split('/')[0] + '//' + url.split('/')[2];
    const isCrossDomain = !(currentUrl == resourceUrl);
    if (isCrossDomain) {
      let blobUrl: string;
      let a: HTMLAnchorElement;
      const x = new XMLHttpRequest();
      x.open('get', url, true);
      x.responseType = 'blob';
      x.onload = () => {
        blobUrl = window.URL.createObjectURL(x.response);
        a = document.createElement('a');
        a.href = blobUrl;
        a.download = fileName;
        a.click();
      };
      x.send();
      setTimeout(function () {
        document.body.removeChild(a);
        (window.URL || window.webkitURL || window).revokeObjectURL(blobUrl);
      }, 1000);
    } else {
      const a = document.createElement('a');
      a.setAttribute('href', url);
      a.setAttribute('download', fileName);
      a.click();
    }
  }
};

export default baseDownload;
