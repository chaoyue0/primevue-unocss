export const prePromiseLoader = (url: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      resolve('图片加载完成');
    };
    img.onerror = () => {
      reject('图片加载失败');
    };
  });
};

export const imgPreLoader = (images: string[]) => {
  const promiseArr = [] as Promise<unknown>[];
  images.forEach((e: string) => {
    promiseArr.push(prePromiseLoader(e));
  });
  return Promise.all(promiseArr);
};

export function preLoader(
  images: string[],
  doSuccess: () => void,
  doError?: () => void
) {
  imgPreLoader(images).then(
    (resolve: Awaited<unknown>[]) => {
      console.log('resolve', resolve);
      doSuccess();
    },
    (reject: Awaited<unknown>[]) => {
      console.log('reject', reject);
      if (doError) {
        doError();
      }
    }
  );
}
