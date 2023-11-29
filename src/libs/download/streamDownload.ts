import baseDownload from '@/libs/download/baseDownload';

const streamDownload = (blob: Blob, fileName: string) => {
  const blobUrl = URL.createObjectURL(blob);
  baseDownload(blobUrl, fileName);
  URL.revokeObjectURL(blobUrl);
};

export default streamDownload;
