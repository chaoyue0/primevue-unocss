const getBlob = (url: string): Blob => {
  const x = new XMLHttpRequest();
  x.open('get', url, true);
  x.responseType = 'blob';
  x.onload = () => {
    console.log('>>>', x.response);
    return x.response;
  };
  x.onprogress = (e: any) => {
    handleEvent(e);
  };
  x.send();
  return x.response;
};

const handleEvent = (e: any) => {
  console.log(`${e.type}: ${e.loaded} bytes transferred\n`);
};

export default getBlob;
