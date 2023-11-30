import { ref } from 'vue';
const progress = ref<number>();
const timeStamp = ref<number>();
const total = ref<number>();
const percentage = ref<string>();

const streamDownload = (url: string, fileName: string) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.send();
  xhr.responseType = 'blob';
  xhr.onload = () => {
    if (xhr.status === 200) {
      const blobUrl = URL.createObjectURL(xhr.response);
      const a = document.createElement('a');
      a.setAttribute('href', blobUrl);
      a.setAttribute('download', fileName);
      a.click();
      URL.revokeObjectURL(blobUrl);
    }
  };
  xhr.onprogress = (e: ProgressEvent) => {
    handleEvent(e);
  };
};

const handleEvent = (e: ProgressEvent) => {
  progress.value = e.loaded;
  timeStamp.value = e.timeStamp;
  total.value = e.total;
  percentage.value =
    Math.round(+(progress.value / total.value).toFixed(2) * 100) + '%';
  console.log(
    `'progress': ${progress.value} 'percentage': ${percentage.value} 'timeStamp': ${timeStamp.value} \n`
  );
};

export { streamDownload, progress, timeStamp, total, percentage };
