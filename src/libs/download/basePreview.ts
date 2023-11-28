const basePreview = (
  downloadUrl: string,
  fileName: string,
  target?: boolean
) => {
  const formObj = document.createElement('form');
  formObj.action = downloadUrl;
  formObj.method = 'get';
  formObj.target = target ? '_blank' : '_self';
  formObj.style.display = 'none';

  const formItem = document.createElement('input');
  formItem.value = fileName;
  formItem.name = 'fileName';

  formObj.appendChild(formItem);
  try {
    document.body.appendChild(formObj);
    formObj.submit();
  } catch (e) {
    console.error(e);
    //IE 不兼容form
    window.open(downloadUrl, target ? '_blank' : '_self');
  } finally {
    setTimeout(function () {
      document.body.removeChild(formObj);
    }, 1000);
  }
};

export default basePreview;
