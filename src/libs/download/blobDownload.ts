import { ref } from 'vue';
const progress = ref<number>();
const timeStamp = ref<number>();
const total = ref<number>();
const percentage = ref<string>();
const blobDownload = (blob: Blob, fileName: string) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = (e: ProgressEvent<FileReader>) => {
    const a = document.createElement('a');
    a.setAttribute('href', e.target?.result as string);
    a.setAttribute('download', fileName);
    a.click();
  };
  reader.onprogress = (e: ProgressEvent<FileReader>) => {
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

export { blobDownload, progress, timeStamp, total, percentage };
