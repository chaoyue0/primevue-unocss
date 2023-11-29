const baseDownload = (url: string, fileName: string) => {
  const isSupport = 'download' in document.createElement('a');
  if (isSupport) {
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', fileName);
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

export default baseDownload;
