const getBlob = (url: string): Blob => {
  const x = new XMLHttpRequest();
  x.open('get', url, true);
  x.responseType = 'blob';
  x.onload = () => {
    if (x.status === 200) {
      return x.response;
    }
  };
  x.onprogress = (e: ProgressEvent) => {
    handleEvent(e);
  };
  x.send();
  return x.response;
};

const handleEvent = (e: ProgressEvent) => {
  const progress = e.loaded;
  const timeStamp = e.timeStamp;
  const total = e.total;
  const percentage = Math.round(+(progress / total).toFixed(2) * 100) + '%';
  console.log(
    `'progress': ${progress} 'percentage': ${percentage} 'timeStamp': ${timeStamp} \n`
  );
};

export default getBlob;
